import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UnauthorizedException,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { Public } from '../auth/decorators/public.decorator';
import { UploadDocumentsDto } from './dto/upload-documents.dto';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import type { ProviderDocumentFiles } from './providers.service';
import { ProvidersService } from './providers.service';

@Controller('provider')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterProviderDto) {
    return this.providersService.register(dto);
  }

  @Public()
  @Post('documents')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'nicFrontImage', maxCount: 1 },
        { name: 'nicBackImage', maxCount: 1 },
        { name: 'selfieImage', maxCount: 1 },
        { name: 'portfolio', maxCount: 1 },
      ],
      {
        storage: memoryStorage(),
        limits: { fileSize: 20 * 1024 * 1024 },
        fileFilter: (
          _req: unknown,
          file: { mimetype: string },
          cb: (err: Error | null, accept: boolean) => void,
        ) => {
          const allowed = new Set([
            'image/jpeg',
            'image/png',
            'image/webp',
            'application/pdf',
            'application/zip',
            'application/x-zip-compressed',
          ]);
          allowed.has(file.mimetype)
            ? cb(null, true)
            : cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
        },
      },
    ),
  )
  uploadDocuments(
    @Body() dto: UploadDocumentsDto,
    @UploadedFiles() files: Express.Multer.File[] | Record<string, Express.Multer.File[]>,
  ) {
    return this.providersService.uploadDocuments(
      dto.providerId,
      files as ProviderDocumentFiles,
    );
  }

  @Public()
  @Get('me')
  getMe(@Headers('authorization') auth: string) {
    const token = extractBearer(auth);
    return this.providersService.getMe(token);
  }

  @Public()
  @Patch('me')
  updateMe(
    @Headers('authorization') auth: string,
    @Body() dto: UpdateProviderDto,
  ) {
    const token = extractBearer(auth);
    return this.providersService.updateMe(token, dto);
  }
}

function extractBearer(auth: string): string {
  if (!auth?.startsWith('Bearer ')) throw new UnauthorizedException('Missing token');
  return auth.slice(7);
}
