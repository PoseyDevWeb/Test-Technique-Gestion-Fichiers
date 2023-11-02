import express, { Router } from 'express';
import { FileController } from '../controllers/FileController';

export class FileRoutes {
  private router: Router;
  private fileController: FileController;

  constructor() {
    this.router = express.Router();
    this.fileController = new FileController();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post('/create-file/:fileType/:fileName', this.fileController.createFile.bind(this.fileController));
    this.router.get('/list', this.fileController.getFileList.bind(this.fileController));
    this.router.get('/download/:fileName', this.fileController.downloadFile.bind(this.fileController));
    this.router.delete('/:fileName', this.fileController.deleteFile.bind(this.fileController));
  }

  public getRouter(): Router {
    return this.router;
  }
}




// {
//     "fileName": "monFichier",
//     "fileType": "xml"
//   }