# Application de Gestion de Fichiers

## Table des matières
1. [Introduction](#introduction)
2. [Utilisation](#utilisation)
   - [Installer les dépendances](#installer-les-dépendances)
   - [Configuration de l'Application](#configuration-de-lapplication)
   - [Démarrage de l'Application](#démarrage-de-lapplication)
   - [Accéder à l'Interface Utilisateur](#accéder-à-linterface-utilisateur)
   - [Utiliser l'Application](#utiliser-lapplication)
   - [Gestion des Messages d'Alerte](#gestion-des-messages-dalerte)
   - [Modification des Styles](#modification-des-styles)
   - [Personnalisation Additionnelle](#personnalisation-additionnelle)
3. [Exécution](#exécution)
   - [Installer les dépendances du Backend](#installer-les-dépendances-du-backend)
   - [Configurer le Backend](#configurer-le-backend)
   - [Lancer le Backend](#lancer-le-backend)
   - [Installer les dépendances du Frontend](#installer-les-dépendances-du-frontend)
   - [Lancer le Frontend](#lancer-le-frontend)
   - [Accéder à l'Application](#accéder-à-lapplication)

## Introduction
L'application de gestion de fichiers est une solution complète développée en utilisant Node.js, Express, TypeScript pour le backend, et React.js, TypeScript pour le frontend. Après avoir lancé l'application, un dossier appelé "Folder" sera créé pour stocker les fichiers que vous allez créer.

## Utilisation

### Installer les dépendances
Assurez-vous d'avoir Node.js installé sur votre machine. Vérifiez que les dépendances du backend et du frontend ont été installées en suivant les instructions de la section "Exécution" dans le fichier README.

### Configuration de l'Application
Explorez les dossiers backend et frontend pour ajuster les configurations si nécessaire, comme les paramètres de connexion à la fausse API dans le backend.

### Démarrage de l'Application
Suivez les instructions de la section "Exécution" pour lancer le backend et le frontend de l'application.

### Accéder à l'Interface Utilisateur
Ouvrez votre navigateur web et accédez à l'URL suivante: `http://localhost:3000`

### Utiliser l'Application
- Sur la page d'accueil, vous trouverez la liste des fichiers existants avec des options pour les supprimer ou les télécharger.
- Utilisez le formulaire sur la page pour créer un nouveau fichier en remplissant les champs requis tels que le nom du fichier et le type de fichier (CSV, XML, Excel).
- Explorez les différentes façons d'utiliser les styles en examinant les fichiers de style fournis dans le dossier styles.

### Gestion des Messages d'Alerte
Les messages d'alerte sont gérés avec la bibliothèque SweetAlert2. Soyez attentif aux messages d'alerte pour des actions spécifiques.

### Modification des Styles
Les styles CSS sont définis dans les fichiers FileList.css et FileFormAddList.module.css. Pour une démonstration, le fichier FileList.tsx utilise également un style en ligne défini dans la constante modalStyle.

### Personnalisation Additionnelle
Explorez le code source pour comprendre et personnaliser davantage l'application selon vos besoins spécifiques. N'hésitez pas à explorer, créer de nouveaux fichiers, télécharger, supprimer, et observer les différentes approches de styles utilisées dans l'application.

## Exécution

### Installer les dépendances du Backend
Assurez-vous d'avoir Node.js installé sur votre machine. Naviguez vers le dossier backend de l'application. Exécutez la commande suivante pour installer les dépendances: `npm install`

### Configurer le Backend
Assurez-vous de configurer les fichiers de configuration si nécessaire, tels que les paramètres de connexion à la fausse API.

### Lancer le Backend
Exécutez la commande suivante pour démarrer le serveur backend: `npm start`

### Installer les dépendances du Frontend
Naviguez vers le dossier frontend de l'application. Exécutez la commande suivante pour installer les dépendances: `npm install`

### Lancer le Frontend
Exécutez la commande suivante pour démarrer l'application frontend: `npm start`

### Accéder à l'Application
Ouvrez votre navigateur web et accédez à l'URL suivante: `http://localhost:3000`

Vous devriez maintenant pouvoir utiliser l'application de gestion de fichiers avec les fonctionnalités de création, gestion et téléchargement de fichiers dans différents formats. N'hésitez pas à ajuster les ports ou les configurations selon vos besoins spécifiques.
