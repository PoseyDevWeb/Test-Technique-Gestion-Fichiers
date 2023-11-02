// // src/services/FileService.ts
// import * as fs from 'fs';
// import * as axios from 'axios';
// import * as xmlbuilder from 'xmlbuilder';
// import * as exceljs from 'exceljs';

// export class FileService {
//   public createFile(fileType: string, fileName: string): void {
//     // Logique pour créer le fichier en fonction du type (csv, xml, excel)
//     // Utilisez axios pour obtenir les données de l'API
//     // Utilisez fs, xmlbuilder, et exceljs pour écrire les données dans le fichier
//   }

//   public getFileList(): any {
//     // Logique pour obtenir la liste des fichiers créés
//     // Utilisez fs.readdirSync pour obtenir la liste des fichiers dans le dossier
//   }

//   public downloadFile(fileName: string, res: any): void {
//     // Logique pour télécharger un fichier
//     // Utilisez fs.createReadStream et res.download pour envoyer le fichier en réponse
//   }

//   public deleteFile(fileName: string): void {
//     // Logique pour supprimer un fichier
//     // Utilisez fs.unlinkSync pour supprimer le fichier
//   }
// }

// src/services/FileService.ts
import * as fs from 'fs';
import axios from 'axios';
import * as xmlbuilder from 'xmlbuilder';
import * as exceljs from 'exceljs';

export class FileService {
  private dataUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  private folderPath: string = '../Folder/';
  constructor() {
    // Assure-toi que le dossier existe
    if (!fs.existsSync(this.folderPath)) {
      fs.mkdirSync(this.folderPath);
    }
  }

  public async createFile(fileType: string, fileName: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
    try {
      // Obtenir les données de l'API
      const response = await axios.get(this.dataUrl);
      const data = response.data;

      // Créer le fichier en fonction du type (csv, xml, excel)
      switch (fileType) {
        case 'csv':
          this.createCsvFile(fileName, data);
          resolve();
          break;
        case 'xml':
          this.createXmlFile(fileName, data);
          resolve();
          break;
        case 'excel':
          this.createExcelFile(fileName, data);
          resolve();
          break;
        default:
          reject(new Error('Type de fichier non pris en charge'));
      }
    } catch (error) {
      console.error('Erreur lors de la création du fichier :', error);
      reject(error);
    }
});
  }



  
  public getFileList(): string[] {
    // Obtenir la liste des fichiers dans le dossier
    return fs.readdirSync(this.folderPath);
  }




  public downloadFile(fileName: string, res: any): void {
    const filePath  = `${this.folderPath}/${fileName}`;

    // Envoyer le fichier en réponse
    res.download(filePath, fileName, (err: any) => {
      if (err) {
        console.error('Erreur lors du téléchargement du fichier :', err);
        res.status(500).send('Erreur lors du téléchargement du fichier');
      }
    });
  }



  public deleteFile(fileName: string): void {
    const filePath  = `${this.folderPath}/${fileName}`;

    // Supprimer le fichier
    try {
      fs.unlinkSync(filePath);
      console.log(`Le fichier ${fileName} a été supprimé avec succès.`);
    } catch (error) {
      console.error('Erreur lors de la suppression du fichier :', error);
    }
  }



  private createCsvFile(fileName: string, data: any[]): void {
    const csvData = data.map((item) => `${item.id},${item.title},${item.body}`).join('\n');
    fs.writeFileSync(this.folderPath + fileName + ".csv", csvData);
  }



  private createXmlFile(fileName: string, data: any[]): void {
    const xmlData = xmlbuilder.create('root');

    data.forEach((item) => {
      xmlData.ele('item', { id: item.id }).ele('title', item.title).up().ele('body', item.body);
    });

    fs.writeFileSync(this.folderPath + fileName + ".xml" ,xmlData.end({ pretty: true }));
  }


  private createExcelFile(fileName: string, data: any[]): void {
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Title', key: 'title', width: 30 },
      { header: 'Body', key: 'body', width: 50 },
    ];

    data.forEach((item) => {
      worksheet.addRow({ id: item.id, title: item.title, body: item.body });
    });

    workbook.xlsx.writeFile(this.folderPath + fileName + ".xlsx");
  }
}
