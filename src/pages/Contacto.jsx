import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contacto.css';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje, ' + nombre + '.');
    setNombre('');
    setMensaje('');
  };
  return (
    <main className="contacto-container">
      <section className="formulario-contacto">
        <h2>Hablemos</h2>
        <p>¿Tenés una consulta? Escribinos y te respondemos pronto.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
          <label>
            Mensaje
            <textarea rows={4} value={mensaje} onChange={(e) => setMensaje(e.target.value)} required/>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className="info-contacto">
        <h3>O escribinos directamente</h3>
        <div className="datos-contacto">
          <p>Email: <a href="mailto:contacto@loscelulareshermanos.com">contacto@loscelulareshermanos.com</a></p>
          <p>Teléfono: <a href="tel:+5491123456789">+54 9 11 2345 6789</a></p>
        </div>
        <Link to="/" className="volver-home">Volver al inicio</Link>
      </section>
    </main>
  );
}
