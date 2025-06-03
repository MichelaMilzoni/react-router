// backend/server.js
require('dotenv').config(); // Carica le variabili d'ambiente da .env
const express = require('express');
const cors = require('cors'); // Importa il middleware CORS
const app = express();
const PORT = process.env.PORT || 3000; // Porta del server, prende da .env o usa 3000

// Middleware
app.use(cors()); // Abilita CORS per tutte le richieste (per permettere al frontend di comunicare)
app.use(express.json()); // Abilita il parsing del corpo delle richieste in formato JSON

// simulazione DB
const postsData = [
  { id: 1, title: "Post 1", content: "Contenuto del primo post." },
  { id: 2, title: "Post 2", content: "Contenuto del secondo post." },
  { id: 2, title: "Post 3", content: "Contenuto del terzo post." },
  { id: 2, title: "Post 4", content: "Contenuto del quarto post." }
];

// rotta API base 
app.get('/', (req, res) => {
  res.send('Benvenuto nel Backend del tuo blog!');
});

// rotta per recuperare tutti i "post"
app.get('/api/posts', (req, res) => {
  // Invia la lista di post (solo ID, titolo, data per la lista)
  const simplifiedPosts = postsData.map(({ id, title, date }) => ({ 
    id, 
    title, 
    date 
  }));
  res.json(simplifiedPosts);
});



// Avvia il server
app.listen(PORT, () => {
  console.log(`Backend server in esecuzione su http://localhost:${PORT}`);
});