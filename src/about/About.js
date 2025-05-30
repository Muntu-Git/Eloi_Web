import React from 'react';
import Propertiesimages from "../images";


export const About = () => {
  const values = [
    {
      id: 1,
      icon: "🤝",
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y la honestidad con nuestros clientes."
    },
    {
      id: 2,
      icon: "🔍",
      title: "Transparencia",
      description: "Información clara y detallada en cada proceso, sin sorpresas ni costes ocultos."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Eficiencia",
      description: "Procesos ágiles y optimizados para conseguir los mejores resultados en el menor tiempo posible."
    },
    {
      id: 4,
      icon: "🎯",
      title: "Compromiso",
      description: "Dedicación total para alcanzar los objetivos de nuestros clientes y superar sus expectativas."
    },
    {
      id: 5,
      icon: "🏆",
      title: "Excelencia",
      description: "Estándares de calidad superiores en cada servicio que ofrecemos a nuestros clientes."
    },
    {
      id: 6,
      icon: "💡",
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías y métodos para ofrecer un servicio de vanguardia."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Ana García",
      role: "CEO & Fundadora",
      description: "Con más de 20 años de experiencia en el sector inmobiliario, lidera nuestra visión estratégica.",
      // image: ceoImage,
      image: Propertiesimages[28], // Placeholder temporal
      specialties: ["Dirección estratégica", "Desarrollo de negocio", "Relaciones institucionales"]
    },
    {
      id: 2,
      name: "Miguel Rodríguez",
      role: "Agente Senior",
      description: "Especialista en propiedades residenciales de lujo con un enfoque personalizado para cada cliente.",
      // image: agent1Image,
      image: Propertiesimages[27], // Placeholder temporal
      specialties: ["Propiedades de lujo", "Negociación", "Valoraciones"]
    },
    {
      id: 3,
      name: "Carmen López",
      role: "Asesora Financiera",
      description: "Experta en financiación inmobiliaria, ayuda a nuestros clientes a encontrar las mejores opciones.",
      // image: advisor1Image,
      image: Propertiesimages[29], // Placeholder temporal
      specialties: ["Financiación", "Hipotecas", "Asesoramiento fiscal"]
    },
    {
      id: 4,
      name: "David Martín",
      role: "Agente Comercial",
      description: "Especializado en propiedades comerciales e inversiones inmobiliarias para empresas.",
      image: Propertiesimages[26], // Placeholder temporal
      specialties: ["Inmuebles comerciales", "Inversiones", "Análisis de mercado"]
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Más de 15 años construyendo hogares y creando oportunidades</p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundada en 2008 con la visión de revolucionar el mercado inmobiliario local, 
                nuestra inmobiliaria nació de la pasión por ayudar a las personas a encontrar 
                su hogar ideal. Lo que comenzó como un pequeño equipo de profesionales 
                comprometidos, se ha convertido en una de las inmobiliarias de referencia 
                en la región.
              </p>
              <p>
                A lo largo de estos años, hemos acompañado a más de 2.000 familias en la 
                búsqueda de su hogar perfecto, gestionado operaciones por valor de más de 
                200 millones de euros y establecido relaciones duraderas basadas en la 
                confianza y la transparencia.
              </p>
              <div className="history-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Años de experiencia</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2000+</span>
                  <span className="stat-label">Familias atendidas</span>
                </div>
                <div className="stat">
                  <span className="stat-number">200M€</span>
                  <span className="stat-label">En operaciones</span>
                </div>
              </div>
            </div>
            <div className="history-image">
              {/* Reemplaza con tu imagen real */}
              <img 
                src={Propertiesimages[25]} // Placeholder image for team in office
                alt="Nuestro equipo en la oficina" 
                className="team-office-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores y Misión Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <h2>Nuestros Valores y Misión</h2>
            <p>Los principios que guían cada una de nuestras acciones</p>
          </div>
          <div className="values-grid">
            {values.map(value => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Nuestro Equipo</h2>
            <p>Profesionales comprometidos con tu éxito</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                  <div className="specialties">
                    {member.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para encontrar tu hogar ideal?</h2>
            <p>Nuestro equipo está aquí para ayudarte en cada paso del camino</p>
            <a href="/contact" className="cta-link">
              <button className="cta-button">Contacta con nosotros</button>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};
