// backend/server.js
require('dotenv').config(); // Carica le variabili d'ambiente da .env
const express = require('express');
const cors = require('cors'); // Importa il middleware CORS
const app = express();
const PORT = process.env.PORT || 3000; // Porta del server, prende da .env o usa 3000

// Middleware
app.use(cors()); // Abilita CORS per tutte le richieste (per permettere al frontend di comunicare)
app.use(express.json()); // Abilita il parsing del corpo delle richieste in formato JSON

// Esempio di una rotta API (molto semplice, per dimostrazione)
app.get('/', (req, res) => {
  res.send('Benvenuto nel Backend del tuo blog!');
});

// Una rotta per "post" statici (anche se l'esercizio non lo richiede, è un esempio)
app.get('/api/posts', (req, res) => {
  const posts = [
    { id: 1, title: "Backend Post 1", content: "Contenuto del post dal backend." },
    { id: 2, title: "Backend Post 2", content: "Un altro post dal server." }
  ];
  res.json(posts); // Invia i post come JSON
});


// Avvia il server
app.listen(PORT, () => {
  console.log(`Backend server in esecuzione su http://localhost:${PORT}`);
});