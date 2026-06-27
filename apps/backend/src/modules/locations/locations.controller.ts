import { Controller, Get, Param } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { LocationsService } from './locations.service';

@Public()
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('provinces')
  getProvinces() {
    return this.locationsService.getProvinces();
  }

  @Get('provinces/:provinceId/districts')
  getDistricts(@Param('provinceId') provinceId: string) {
    return this.locationsService.getDistricts(provinceId);
  }

  @Get('districts/:districtId/zones')
  getZones(@Param('districtId') districtId: string) {
    return this.locationsService.getZones(districtId);
  }
}
