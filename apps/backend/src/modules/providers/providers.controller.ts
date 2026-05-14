import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { UploadDocumentsDto } from './dto/upload-documents.dto';
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

  @Post('documents')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'nicFrontImage', maxCount: 1 },
        { name: 'nicBackImage', maxCount: 1 },
        { name: 'selfieImage', maxCount: 1 },
        { name: 'portfolio', maxCount: 10 },
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

  @Get('me')
  getMe(@CurrentUser() user: { id: string }) {
    return this.providersService.getMe(user.id);
  }

  @Patch('me')
  updateMe(@CurrentUser() user: { id: string }, @Body() dto: UpdateProviderDto) {
    return this.providersService.updateMe(user.id, dto);
  }
}
