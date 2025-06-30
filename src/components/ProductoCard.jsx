import { Link } from 'react-router-dom';
import '../styles/ProductoCard.css';

function ProductoCard({ celular }) {
  return (
    <div className="tarjeta-celu">
      <img
        src={celular.fotos[0]}
        alt={celular.nombre}
      />
      <div className="tarjeta-info">
        <h3>{celular.nombre}</h3>
        <p>
          {celular.descripcion}
        </p>
        <span className="tarjeta-precio">${celular.precio}</span>
        <Link to={`/productodetalle/${celular.id}`} className="btn-comprar">
          Comprar
        </Link>
      </div>
    </div>
  );
}

export default ProductoCard;
