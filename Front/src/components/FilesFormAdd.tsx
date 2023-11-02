
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FilesFormAdd.module.css'; 
import Swal from 'sweetalert2';

interface FileFormAddProps {
    onClose: () => void;
  }
  
  const FileFormAdd: React.FC<FileFormAddProps> = ({ onClose }) => {
  
  const [newFileName, setNewFileName] = useState<string>('');
  const [fileType, setFileType] = useState<string>('csv');

  const handleCreateFile = async (e: React.FormEvent) => {
    e.preventDefault();

    if(newFileName){

    try {
     const response : any = await axios.post(`http://localhost:5000/files/create-file/${fileType}/${newFileName}`, {});
    
     const {status, data} = response
      setNewFileName('');
    //   onClose(); // Fermer le modal après la création du fichier
    if (status === 201) {
        setTimeout(() =>  3000);
    
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: data,
          showConfirmButton: false,
          timer: 3000,
        });
    }
    } catch (error:any) {

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: "une erreur inconue a été survenue",
                    showConfirmButton: false,
                    timer: 4000,
                  }); 

            console.error("Erreur lors de la création du fichier :", error);
    
    }
}else{
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: "le fichier doit absolument avoir un nom: vueilez saisir un nom!",
        showConfirmButton: false,
        timer: 4000,
      }); 
}
  };

  return (
    <div className={styles.modalContainer}>
        <div style={{ position: 'absolute', top: 50, color:'white', fontSize: 50, cursor:'pointer' }} onClick={onClose}>
        &#x2715;
        </div>
      <div className={styles.modalContent}>
        
        <h2>Créer un nouveau fichier</h2>
        <form onSubmit={handleCreateFile}>
          <label>Nouveau nom de fichier:</label>
          <input
            type="text"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
          />

          <label>Type de fichier:</label>
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value="csv">CSV</option>
            <option value="xml">XML</option>
            <option value="excel">Excel</option>
          </select>

          <button type="submit">Créer</button>
        </form>
      </div>
    </div>
  );
};

export default FileFormAdd;
