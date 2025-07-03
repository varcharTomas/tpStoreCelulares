import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../data/data.js';
import '../styles/Productos.css';

const Productos = () => {
  const { idMarca } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeMarca, setActiveMarca] = useState(null);

  useEffect(() => {
    if (idMarca) {
      const marcaId = parseInt(idMarca);
      setFilteredProducts(celulares.filter(c => c.marcaId === marcaId));
      setActiveMarca(marcaId);
    } else {
      setFilteredProducts(celulares);
      setActiveMarca(null);
    }
  }, [idMarca]);

  return (
    <div className="productos-page">
      <h1>Catálogo de celulares</h1>

      <div className="filtros-marcas">
        <Link to="/productos" className={activeMarca === null ? 'activo' : ''}>Todos</Link>
        {marcas.map(m => (
          <Link
            key={m.id}
            to={`/productos/marca/${m.id}`}
            className={activeMarca === m.id ? 'activo' : ''}
          >
            {m.nombre}
          </Link>
        ))}
      </div>

      <div className="grid-productos">
        {filteredProducts.map(cel => (
          <div key={cel.id} className="card-producto">
            <img src={cel.fotos[0]} alt={cel.nombre} />
            <h3>{cel.nombre}</h3>
            <p>${cel.precio}</p>
            <Link to={`/producto/${cel.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
