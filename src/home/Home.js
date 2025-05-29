import React, { useState, useEffect } from 'react';
import image1 from "../images/houses/house1.jpg";
import image2 from "../images/apartments/apartment1.jpg";
import properties from "../data/properties.json";
import Propertiesimages from "../images";

export const Home = () => {
  // Estado para el carrusel de testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Datos de testimonios
  const testimonials = [
    {
      id: 1,
      name: "María González",
      text: "Excelente servicio, me ayudaron a encontrar la casa perfecta para mi familia. Muy profesionales y atentos en todo momento.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      text: "La mejor decisión fue confiar en ellos para vender mi apartamento. Lo vendieron en tiempo récord y al mejor precio.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Martínez",
      text: "Proceso de compra muy transparente y sin sorpresas. Me asesoraron en cada paso y resolvieron todas mis dudas.",
      rating: 5
    },
    {
      id: 4,
      name: "Diego López",
      text: "Llevo años trabajando con ellos y siempre superan mis expectativas. Altamente recomendados para cualquier operación inmobiliaria.",
      rating: 5
    }
  ];

  // Auto-avance del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Funciones para navegación manual
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

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
          <h1>Tu hogar te esta esperando</h1>
          <p>Casas, apartamentos y mas</p>
        </div>
      </div>

      {/* SECCIÓN INTERMEDIA CON FONDO NEGRO */}
      <div className="black-section black-section-1">
        <h2>Propiedades destacadas</h2>
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
          <img src={Propertiesimages[21]} alt="Compra" className="overlay-img"></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Alquiler</h1>
          <p>Amplia oferta de alquileres en ubicaciones clave para todos los presupuestos.</p>
          <img src={Propertiesimages[22]} alt="Alquiler" className="overlay-img"></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Tasación</h1>
          <p>Valoramos tu propiedad de forma profesional, precisa y sin compromiso.</p>
          <img src={Propertiesimages[23]} alt="Tasación" className="overlay-img"></img>
        </div>
        <div className="home-overlay-content icon-home">
          <h1>Asesoría</h1>
          <p>Te guiamos en cada paso del proceso de compra, venta o inversión.</p>
          <img src={Propertiesimages[24]} alt="Asesoria" className="overlay-img"></img>
        </div>
      </div>

      {/* SECCIÓN INTERMEDIA CON FONDO NEGRO */}
      <div className="black-section black-section-2">
        <div>
          <h2>¿Por qué elegirnos?</h2>
          <p>
            Somos una inmobiliaria con más de 15 años de experiencia. Te ayudamos a encontrar el
            hogar de tus sueños, con transparencia y seguridad.
          </p>
        </div>
      </div>

      {/* TERCERA IMAGEN PARALLAX - TESTIMONIOS */}
      <div className="parallax" style={{ backgroundImage: `url(${image1})` }}>
        <div className="home-overlay-content testimonials-content">
          <h2>Testimonios</h2>
          
          {/* CARRUSEL DE TESTIMONIOS */}
          <div className="testimonials-carousel">
            <div className="testimonial-container">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="testimonial-name">
                  - {testimonials[currentTestimonial].name}
                </h4>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="carousel-controls">
              <button 
                className="carousel-btn prev-btn" 
                onClick={prevTestimonial}
                aria-label="Testimonio anterior"
              >
                ❮
              </button>
              <button 
                className="carousel-btn next-btn" 
                onClick={nextTestimonial}
                aria-label="Siguiente testimonio"
              >
                ❯
              </button>
            </div>

            {/* Indicadores de puntos */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};