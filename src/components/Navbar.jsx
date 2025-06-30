import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NavbarComponente() {
  return (
    <header className="header">
      <h1>Los Celulares Hermanos Familia</h1>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/productos" className="nav-item">Catálogo</Link>
        <Link to="/qs" className="nav-item">¿Quiénes Somos?</Link>
        <Link to="/contacto" className="nav-item">Contacto</Link>
      </nav>
    </header>
  );
}

export default NavbarComponente;
