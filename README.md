
    <li><a href="#introduction">Introduction</a></li>
     <li><a href="#utilisation">Utilisation</a></li>
    <li><a href="#exécution">Exécution</a></li>
   
    <h2><a name="introduction">1. Introduction</a></h2>
     <p>L'application de gestion de fichiers est une solution complète développée en utilisant Node.js, Express, TypeScript pour le backend, 
        et React.js, typescript pour le frontend...
        APres avoir lancé l'application , il va directement creer un dossier appelé Folder pour stocker les fichiers qu'on va creer
    </p>

   
    <h2>2. Utilisation <a name="utilisation"></a></h2>

    <h3>2.1  Installer les dépendance:</h3>

    <p>Assurez-vous d'avoir Node.js installé sur votre machine.</p>
    <p>Vérifiez que les dépendances du backend et du frontend ont été installées en suivant les instructions de la section "Exécution" dans le fichier README.</p>

    <h3>2.2  Configuration de l'Application:</h3>
    <ul>
        <li>Explorez les dossiers backend et frontend pour ajuster les configurations si nécessaire, comme les paramètres de connexion à la fausse API dans le backend.</li>
    </ul>

    <h3>2.3  Démarrage de l'Application:</h3>
    <ul>
        <li>Suivez les instructions de la section "Exécution" pour lancer le backend et le frontend de l'application.</li>
    </ul>

    <h3>2.4  Accéder à l'Interface Utilisateur:</h3>
    <ul>
        <li>Ouvrez votre navigateur web et accédez à l'URL suivante:</li>
    </ul>
    <code>http://localhost:3000</code>

    <h3>2.5  Utiliser l'Application:</h3>
    <ul>
        <li>Sur la page d'accueil, vous trouverez la liste des fichiers existants avec des options pour les supprimer ou les télécharger.</li>
        <li>Utilisez le formulaire sur la page pour créer un nouveau fichier. Remplissez les champs requis tels que le nom du fichier et le type de fichier (CSV, XML, Excel).</li>
        <li>Explorez les différentes façons d'utiliser les styles en examinant les fichiers de style fournis dans le dossier styles.</li>
    </ul>

    <h3>2.6  Gestion des Messages d'Alerte:</h3>
    <ul>
        <li>Les messages d'alerte sont gérés avec la bibliothèque sweetalert2. Soyez attentif aux messages d'alerte pour des actions spécifiques.</li>
    </ul>

    <h3>2.7 Modification des Styles:</h3>
    <ul>
        <li>Les styles CSS sont définis dans les fichiers FileList.css et FileFormAddList.module.css. Pour une démonstration, le fichier FileList.tsx utilise également un style en ligne défini dans la constante modalStyle.</li>
    </ul>

    <h3>2.8  Personnalisation Additionnelle:</h3>
    <ul>
        <li>Explorez le code source pour comprendre et personnaliser davantage l'application selon vos besoins spécifiques.</li>
    </ul>

    <p>N'hésitez pas à explorer, créer de nouveaux fichiers, télécharger, supprimer, et observer les différentes approches de styles utilisées dans l'application.</p>

    



  <h2>3. Exécution <a name="exécution"></a></h2>

    <h3>3.1  Installer les dépendances du Backend:</h3>
    <ul>
        <li>Assurez-vous d'avoir Node.js installé sur votre machine.</li>
        <li>Naviguez vers le dossier backend de l'application.</li>
        <li>Exécutez la commande suivante pour installer les dépendances:</li>
    </ul>
    <code>npm install</code>

    <h3>3.1.1  Configurer le Backend:</h3>
    <ul>
        <li>Assurez-vous de configurer les fichiers de configuration si nécessaire, tels que les paramètres de connexion à la fausse API.</li>
    </ul>

    <h3>3.1.2  Lancer le Backend:</h3>
    <ul>
        <li>Exécutez la commande suivante pour démarrer le serveur backend:</li>
    </ul>
    <code>npm start</code>


    <h3>3.2  Installer les dépendances du Frontend:</h3>
    <ul>
        <li>Naviguez vers le dossier frontend de l'application.</li>
        <li>Exécutez la commande suivante pour installer les dépendances:</li>
    </ul>
    <code>npm install</code>

    <h3> 3.2.1  Lancer le Frontend:</h3>
    <ul>
        <li>Exécutez la commande suivante pour démarrer l'application frontend:</li>
    </ul>
    <code>npm start</code>

    <h3>3.2.2 Accéder à l'Application:</h3>
    <ul>
        <li>Ouvrez votre navigateur web et accédez à l'URL suivante:</li>
    </ul>
    <code>http://localhost:3000</code>

    <p>Vous devriez maintenant pouvoir utiliser l'application de gestion de fichiers avec les fonctionnalités de création, gestion et téléchargement de fichiers dans différents formats.</p>

    <p>N'hésitez pas à ajuster les ports ou les configurations selon vos besoins spécifiques.</p>