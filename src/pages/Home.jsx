import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home-wrapper">
      <section className="presentacion">
        <div>
          <h2>Conectamos a tu familia con tecnología confiable y cercana</h2>
          <p>Porque un celular es más que un dispositivo, es el puente hacia quienes más importan.</p>
          <Link to="/productos" className="btn-primary">Ver catálogo</Link>
        </div>
      </section>

      <section className="values-section">
        <h3>Nuestros valores</h3>
        <div className="values-grid">
          <article className="value-card">
            <h4>Compromiso</h4>
            <p>Brindamos un servicio serio y responsable para tu confianza y tranquilidad.</p>
          </article>
          <article className="value-card">
            <h4>Calidad</h4>
            <p>Trabajamos con marcas reconocidas para garantizar durabilidad y buen rendimiento.</p>
          </article>
          <article className="value-card">
            <h4>Confianza</h4>
            <p>"No es un juego. Nos comprometemos con vos desde la compra hasta el soporte." </p>
          </article>
        </div>
      </section>
    </main>
  );
}
