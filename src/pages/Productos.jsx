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
    <div className="productos-wrapper">
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Filtrar por Marca</h2>
      <div className="filtros-marcas">
        {marcas.map(marca => (
          <Link
            key={marca.id}
            to={`/productos/marca/${marca.id}`}
            className={activeMarca === marca.id ? 'activo' : ''}
          >
            {marca.nombre}
          </Link>
        ))}
        <Link to="/productos" className={!activeMarca ? 'activo' : ''}>Todos</Link>
      </div>

      <div className="productos-container">
        {filteredProducts.map(producto => (
          <div className="producto-card" key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
              <img src={producto.fotos[0]} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toLocaleString()}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
