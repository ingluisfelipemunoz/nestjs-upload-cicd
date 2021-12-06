import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@Controller('upload')
export class UploadController {
@Post()
@UseInterceptors(
	FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
          }),
    }),
)
async uploadedFile(@UploadedFile() file, @Req() r) {
    const response = {
    	originalname: file.originalname,
    	filename: file.filename,
    };
    return response;
}

@Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}
