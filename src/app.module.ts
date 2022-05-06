import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PoisModule } from './pois/pois.module';
import { WalksModule } from './walks/walks.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: "",
    }),
    PoisModule,
    WalksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
