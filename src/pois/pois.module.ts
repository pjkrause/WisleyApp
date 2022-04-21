import { Module } from '@nestjs/common';
import { PoisController } from './pois.controller';
import { PoisService } from './pois.service';

@Module({
  controllers: [PoisController],
  providers: [PoisService]
})
export class PoisModule {}
