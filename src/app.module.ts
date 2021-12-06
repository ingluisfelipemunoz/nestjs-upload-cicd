import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './modules/upload/upload.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [UploadModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
