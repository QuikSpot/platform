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
} from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { RegisterProviderDto } from './dto/register-provider.dto';
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
