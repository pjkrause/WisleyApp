import { Controller, Get } from '@nestjs/common';
import { PoisService } from "./pois.service";

@Controller('pois')
export class PoisController {

    constructor(private poisService: PoisService) {
    }

    @Get()
    getPois() {
        return this.poisService.getPois();
    }
}
