// src/components/FileList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FileFormAdd from './FilesFormAdd';
import  '../styles/FilesList.css'
import Swal from 'sweetalert2';


const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/files/list'); // Assurez-vous de remplacer l'URL par votre serveur
      setFiles(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des fichiers :', error);
    }
  };

  const handleDownload = (fileName: string) => {
    window.open(`http://localhost:5000/files/download/${fileName}`, '_blank'); // Assurez-vous de remplacer l'URL par votre serveur
  };

  const handleDelete = async (fileName: string) => {
    try {
      const response = await axios.delete(`http://localhost:5000/files/${fileName}`); // Assurez-vous de remplacer l'URL par votre serveur
      fetchFiles();
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: response.data,
        showConfirmButton: false,
        timer: 4000,
      })
    } catch (error) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: "une erreur inconu est survenue : Suppression anulée.",
        showConfirmButton: false,
        timer: 4000,
      })
      console.error(`Erreur lors de la suppression du fichier ${fileName} :`, error);
    }
  };



  const deleteConfirmation = async (file:any) => {
    Swal.fire({
      title: `Voulez Vous Vraiment supprimer le fichier :  ${file} ?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(file);
      } else if (result.isDenied) {
        return;
      }
    });
  }

  return (
    <div className='filesList'>
       <div className="fileListContainer">
      <h1>Liste des fichiers</h1>
      <button onClick={handleOpenModal} className="createFileButton">
        Créer un fichier
      </button>
      <ul className="fileList">
      {!files.length && (
        <div className='folderEmpty'>
        <h3>le dossier est Vide</h3>
        </div>
      )}
        {files.map((file: any, index) => (
          <li key={index} className="fileItem">
            <div className="fileIcon"></div>
            <div className="fileName">{file}</div>
            <div className="fileActions">
              <button onClick={() => handleDownload(file)}>Télécharger</button>
              <button onClick={() => deleteConfirmation(file)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
      {showModal && (
        <div style={modalStyle}>
          <FileFormAdd onClose={handleCloseModal} />
        </div>
      )}
    </div>
    
  );
};

const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

export default FileList;
