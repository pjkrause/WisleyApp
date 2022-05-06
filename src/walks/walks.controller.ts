import { Controller, Get } from '@nestjs/common';
import { WalksService } from "./walks.service";

@Controller('walks')
export class WalksController {
    constructor(private walksService: WalksService) {
    }

    @Get()
    getWalks() {
        return this.walksService.getWalks();
    }
}
