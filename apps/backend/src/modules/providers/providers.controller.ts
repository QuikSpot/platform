import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { RegisterProviderDto } from './dto/register-provider.dto';
import { ProvidersService } from './providers.service';

@Controller('provider')
export class ProvidersController {
    constructor(private readonly providersService: ProvidersService) { }

    @Public()
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    register(@Body() dto: RegisterProviderDto) {
        return this.providersService.register(dto);
    }
}
