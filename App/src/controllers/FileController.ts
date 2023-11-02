
// src/controllers/FileController.ts
import { Request, Response } from 'express';
import { FileService } from '../services/FileServices';

export class FileController {
  private fileService: FileService;



  constructor() {
    this.fileService = new FileService();
  }




public createFile(req: Request, res: Response): void {
    const { fileType, fileName } = req.params;

    this.fileService.createFile(fileType, fileName)
      .then(() => res.status(201).send(`Le fichier ${fileName}.${fileType} a été créé avec succès.`))
      .catch((error) => res.status(500).send(`Erreur lors de la création du fichier : ${error.message}`))
      

  }






  public getFileList(req: Request, res: Response): void {
    const fileList = this.fileService.getFileList();
    res.status(200).json(fileList);
  }





  public downloadFile(req: Request, res: Response): void {
    const { fileName } = req.params;

    try {
      this.fileService.downloadFile(fileName, res);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier :', error);
      res.status(500).send('Erreur lors du téléchargement du fichier');
    }
  }





  public deleteFile(req: Request, res: Response): void {
    const { fileName } = req.params;

    try {
      this.fileService.deleteFile(fileName);
      res.status(200).send(`Le fichier ${fileName} a été supprimé avec succès.`);
    } catch (error) {
      console.error('Erreur lors de la suppression du fichier :', error);
      res.status(500).send('Erreur lors de la suppression du fichier');
    }
  }
}

