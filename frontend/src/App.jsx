// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa i componenti delle pagine
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import AboutPage from './pages/AboutPage';

// Importa il componente Layout
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Il Layout avvolge tutte le rotte per centralizzare la Navbar e il footer */}
        <Route path="/" element={<Layout />}>
          {/* Le rotte figlie vengono renderizzate nell'Outlet del Layout */}
          <Route index element={<HomePage />} /> {/* La rotta di default per "/" */}
          <Route path="posts" element={<PostsListPage />} />
          <Route path="about" element={<AboutPage />} />

          {/* Rotta per gestire URL non trovati (pagina 404) */}
          <Route path="*" element={
            <div className="text-center p-5 bg-white rounded shadow-sm">
              <h1 className="display-4 text-danger">404</h1>
              <p className="lead">Pagina Non Trovata!</p>
              <a href="/" className="btn btn-primary mt-3">Torna alla Home</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;