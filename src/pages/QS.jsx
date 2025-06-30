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
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/mobile-phone-311327_1280.png"
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
            src="https://cdn.pixabay.com/photo/2016/11/29/04/17/business-1868750_1280.jpg"
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
            src="https://cdn.pixabay.com/photo/2020/12/09/11/28/phone-5818899_1280.jpg"
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
