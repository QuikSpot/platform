import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { ConfirmDocumentsDto } from './dto/confirm-documents.dto';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { SignDocumentDto } from './dto/sign-document.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
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

  /** Returns a signed Supabase Storage upload URL so the browser can upload the file directly. */
  @Public()
  @Post('documents/sign')
  @HttpCode(HttpStatus.OK)
  signDocumentUpload(@Body() dto: SignDocumentDto) {
    return this.providersService.createSignedUpload(dto);
  }

  /** Records metadata for files the browser already uploaded via a signed URL. */
  @Public()
  @Post('documents')
  @HttpCode(HttpStatus.OK)
  confirmDocuments(@Body() dto: ConfirmDocumentsDto) {
    return this.providersService.confirmDocuments(dto);
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
