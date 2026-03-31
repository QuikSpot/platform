import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { ProviderLoginDto } from './dto/provider-login.dto';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { UpdateProviderProfileDto } from './dto/update-provider-profile.dto';
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
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: ProviderLoginDto) {
    return this.providersService.login(dto);
  }

  @Get('profile')
  getProfile(@CurrentUser() user: { id: string }) {
    return this.providersService.getProfile(user.id);
  }

  @Patch('profile')
  updateProfile(
    @CurrentUser() user: { id: string },
    @Body() dto: UpdateProviderProfileDto,
  ) {
    return this.providersService.updateProfile(user.id, dto);
  }
}
