// frontend/src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Importa la Navbar

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Bootstrap flexbox per layout sticky footer */}
      <Navbar /> {/* La Navbar è qui, comune a tutte le pagine */}
      <main className="container my-4 flex-grow-1"> {/* Contenitore Bootstrap con padding */}
        <Outlet /> {/* Qui verranno renderizzate le pagine (HomePage, PostsListPage, AboutPage) */}
      </main>
      <footer className="footer py-3 bg-light mt-auto shadow-sm">
        <div className="container text-center text-muted">
          &copy; {new Date().getFullYear()} Il Mio Blog React - Powered by Bootstrap
        </div>
      </footer>
    </div>
  );
}
export default Layout;