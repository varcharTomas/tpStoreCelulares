import { Link } from 'react-router-dom';
import { marcas } from '../data/data';  
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

      {/* Filtro por marcas */}
      <div className="brand-filter">
        <h3>Filtrar por Marca</h3>
        {marcas.map(marca => (
          <Link 
            key={marca.id}
            to={`/productos/marca/${marca.id}`} 
            className="nav-item brand-item"
          >
            {marca.nombre}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default NavbarComponente;

