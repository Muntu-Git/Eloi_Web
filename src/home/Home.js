import image1 from "../images/houses/house1.jpg";
import image2 from "../images/apartments/apartment1.jpg";



export const Home = () => {
  return (
    <div className="home-container">
      {/* PRIMERA IMAGEN PARALLAX */}
      <div className="parallax" style={{ backgroundImage: `url(${image1})` }}>
        <div className="overlay-content">
          <h1>Encuentra tu hogar ideal</h1>
          <p>Casas, apartamentos y más</p>
        </div>
      </div>

      {/* SECCIÓN INTERMEDIA CON FONDO NEGRO */}
      <div className="black-section">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Somos una inmobiliaria con más de 15 años de experiencia. Te ayudamos a encontrar el
          hogar de tus sueños, con transparencia y seguridad.
        </p>
      </div>

      {/* SEGUNDA IMAGEN PARALLAX */}
      <div className="parallax" style={{ backgroundImage: `url(${image2})` }}>
        <div className="overlay-content">
          <h1>Conoce nuestras propiedades</h1>
        </div>
      </div>
    </div>
  );
};
