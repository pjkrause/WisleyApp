import { Module } from '@nestjs/common';
import { WalksService } from './walks.service';
import { WalksController } from './walks.controller';

@Module({
  providers: [WalksService],
  controllers: [WalksController]
})
export class WalksModule {}
