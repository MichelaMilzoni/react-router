// frontend/src/pages/PostsListPage.jsx
import React from 'react';
// Non faremo una chiamata API per questo esercizio, i post sono hardcodati
// import axios from 'axios'; // Se volessi chiamare il backend per i post

function PostsListPage() {
  const posts = [ // I post sono hardcodati per l'esercizio
    { id: 1, title: "Introduzione a React Router", date: "2023-01-15", content: "Apprendere la navigazione tra le pagine in React." },
    { id: 2, title: "Stilizzare con Bootstrap in React", date: "2023-02-01", content: "Come integrare e usare Bootstrap con i tuoi componenti React." },
    { id: 3, title: "Comprendere i Middleware di Express", date: "2023-03-10", content: "Una guida rapida sui middleware di Node.js Express." },
  ];

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h1 className="mb-4 text-dark">Lista dei Post del Blog</h1>
      {posts.length > 0 ? (
        <ul className="list-group">
          {posts.map(post => (
            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
              <div>
                <h2 className="h5 text-info">{post.title}</h2>
                <p className="text-muted mb-0"><small>Pubblicato il: {post.date}</small></p>
              </div>
              {/* Puoi aggiungere un link per visualizzare il dettaglio del post */}
              <button className="btn btn-sm btn-outline-primary">Leggi di più</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info" role="alert">
          Nessun post disponibile al momento.
        </div>
      )}
    </div>
  );
}
export default PostsListPage;