import { useParams, Link } from 'react-router-dom';
import { celulares } from '../data/data';
import '../styles/ProductoDetalle.css';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === Number(idCelular));

  if (!celular) {
    return (
      <div className="detalle-wrapper">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn-volver">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <main className="detalle-wrapper">
      <Link to="/productos" className="btn-volver">← Volver al catálogo</Link>
      <div className="detalle-card">
        <div className="detalle-imagen">
          <img
            src={celular.fotos[0] || 'https://via.placeholder.com/400x400.png?text=Sin+imagen'}
            alt={celular.nombre}
          />
        </div>
        <div className="detalle-info">
          <h2>{celular.nombre}</h2>
          <p>{celular.descripcion || 'Este celular no tiene descripción aún.'}</p>
          <h3>${celular.precio}</h3>
          <button className="btn-comprar" onClick={() => alert('Compra realizada con éxito')}>
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}
