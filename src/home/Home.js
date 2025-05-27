import image1 from "../images/houses/house1.jpg";
import image2 from "../images/apartments/apartment1.jpg";
import properties from "../data/properties.json";
import Propertiesimages from "../images";



export const Home = () => {

  const renderOutstandingProperties = () => {

    // Mezclar aleatoriamente el array
    const shuffled = properties.sort(() => 0.5 - Math.random());

    // Seleccionar las primeras 3
    const selected = shuffled.slice(0, 3);

    return (
      <div className="outstanding-container">
        {selected.map(prop => (
          <div key={prop.id} className="outstanding-hover-card">
            <img src={Propertiesimages[prop.id]} alt={prop.nombre} className="outstanding-img" />
            <div className="outstanding-hover-info">
              <h3>{prop.nombre}</h3>
              <p>{prop.direccion}</p>
              <p>{prop.precio}</p>
              <p>
                {prop.habitaciones} hab. · {prop.bathrooms} baños · {prop.m2} m²
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="home-container">
      {/* PRIMERA IMAGEN PARALLAX */}
      <div className="parallax" style={{ backgroundImage: `url(${image1})` }}>
        <div className="home-overlay-content">
          <h1>Your home is waiting</h1>
          <p>Houses, apartments and more</p>
        </div>
      </div>

      {/* SECCIÓN INTERMEDIA CON FONDO NEGRO */}
      <div className="black-section black-section-1">
        <h2>Outstanding properties</h2>
        <div className="outstanding-grid outstanding-card-section">
          {renderOutstandingProperties()}
        </div>
        <div>

        </div>
      </div>

      {/* SEGUNDA IMAGEN PARALLAX */}
      <div className="parallax" style={{ backgroundImage: `url(${image2})` }}>
        <div className="home-overlay-content icon-home">
          <h1>Compra</h1>
          <p>Encuentra la casa perfecta para ti, al mejor precio y con total seguridad.</p>
          <img src={Propertiesimages[21]}></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Alquiler</h1>
          <p>Amplia oferta de alquileres en ubicaciones clave para todos los presupuestos.</p>
          <img src={Propertiesimages[22]}></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Tasación</h1>
          <p>Valoramos tu propiedad de forma profesional, precisa y sin compromiso.</p>
          <img src={Propertiesimages[23]}></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Asesoría</h1>
          <p>Te guiamos en cada paso del proceso de compra, venta o inversión.</p>
          <img src={Propertiesimages[24]} alt="Asesoria"></img>
        </div>
      </div>


      {/* SECCIÓN INTERMEDIA CON FONDO NEGRO */}
      <div className="black-section black-section-2">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Somos una inmobiliaria con más de 15 años de experiencia. Te ayudamos a encontrar el
          hogar de tus sueños, con transparencia y seguridad.
        </p>
      </div>

    </div>


  );
};


