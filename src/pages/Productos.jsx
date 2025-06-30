import '../styles/Productos.css';
import { celulares } from '../data/data.js';
import { useParams } from 'react-router-dom';
import ProductoCard from '../components/ProductoCard.jsx';

export default function Productos() {
  const { id } = useParams();
  const productos = id
    ? celulares.filter(c => c.marcaId === id)
    : celulares;

  return (
    <section className="catalogo-contenedor">
      {productos.map((celular) => (
        <ProductoCard key={celular.id} celular={celular} />
      ))}
    </section>
  );
}
