const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'repository', 'public')));

// Route de base pour servir le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'repository', 'public', 'htmlPages', 'index.html'));
});

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).send('Page non trouvée.');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/inscription', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/inscription', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Nom d\'utilisateur :', username);
  console.log('Email :', email);
  console.log('Mot de passe :', password);

  res.send(`Bienvenue ${username}, vous êtes maintenant inscrit!`);
});
