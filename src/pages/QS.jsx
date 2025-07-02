import '../styles/QS.css';

export default function QuienesSomos() {
  return (
    <main className="qs-container">
      <section className="qs-header">
        <h2>Quiénes somos</h2>
        <p>
          En <strong>Los Celulares Hermanos Familia</strong> creemos que la tecnología es algo serio...
          pero también cercano. Por eso mezclamos buenos precios con una atención que parece salida de una sitcom.
        </p>
      </section>

      <section className="qs-content">
        <div className="qs-bloque">
          <img
            src="https://playmania438.com.ar/wp-content/uploads/2022/05/cae.jpg"
            alt="Smartphone"
          />
          <div>
            <h3>Conectamos a las personas</h3>
            <p>
              No vendemos sólo celulares. Vendemos excusas para evitar llamadas. Y también puentes reales
              entre vos y quienes más querés.
            </p>
          </div>
        </div>

        <div className="qs-bloque reverse">
          <img
            src="https://bookline.ai/wp-content/uploads/2024/09/Atencio%CC%81n-cliente-hotel.jpg"
            alt="Atención personalizada"
          />
          <div>
            <h3>Atención con nombre y apellido</h3>
            <p>
              Tratamos a cada cliente como si fuera familia. Y a veces mejor. Asesoramos sin vueltas, con transparencia
              y el compromiso de siempre responder… incluso si el wifi anda mal.
            </p>
          </div>
        </div>

        <div className="qs-bloque">
          <img
            src="https://media.losandes.com.ar/p/78d7edd4540fad09f5587c645aeb59d1/adjuntos/368/imagenes/100/036/0100036679/1000x0/smart/los-mejores-celulares-2023-y-que-seguiran-vigentes-2024.jpg"
            alt="Variedad de dispositivos"
          />
          <div>
            <h3>Variedad para todos los gustos</h3>
            <p>
              Desde los últimos modelos hasta los clásicos que nunca fallan. Elegí lo que necesites y pagalo como puedas.
              Así de simple.
            </p>
          </div>
        </div>

        <div className="qs-cierre">
          <p>
            Somos <strong>Los Celulares Hermanos Familia</strong>. Puede sonar gracioso, pero trabajamos en serio.
            Y como diría un viejo sabio: <em>“Say my name”</em>. Sí, somos nosotros.
          </p>
        </div>
      </section>
    </main>
  );
}
