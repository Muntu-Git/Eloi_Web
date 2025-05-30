import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import propertiesData from "../data/properties.json";
import Propertiesimages from "../images";

export const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Buscar la propiedad por ID
  const propiedad = propertiesData.find(prop => prop.id.toString() === id);

  // Si no se encuentra la propiedad
  if (!propiedad) {
    return (
      <div className="property-detail-container">
        <div className="property-not-found">
          <h2>Propiedad no encontrada</h2>
          <p>La propiedad que buscas no existe o ha sido eliminada.</p>
          <Link to="/properties" className="back-button">
            Volver a propiedades
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="property-detail-container">
      {/* Breadcrumb / Navegación */}
      <div className="breadcrumb">
        <Link to="/properties">Propiedades</Link>
        <span> - </span>
        <span>{propiedad.nombre}</span>
      </div>

      {/* Botón volver */}
      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
      >
        ← Volver
      </button>

      <div className="property-detail-content">
        {/* Imagen principal */}
        <div className="property-detail-image">
          <img
            src={Propertiesimages[propiedad.id]}
            alt={propiedad.nombre}
            className="main-property-image"
          />
        </div>

        {/* Información principal */}
        <div className="property-detail-info">
          <h1>{propiedad.nombre}</h1>
          <div className="property-price">
            <span className="price">{propiedad.precio}</span>
            <span className="property-type">{propiedad.type}</span>
          </div>
          
          <div className="property-location">
            <span className="location-icon">📍</span>
            <span>{propiedad.direccion}</span>
          </div>

          {/* Características principales */}
          <div className="property-features">
            <div className="feature">
              <span className="feature-icon">🛏️</span>
              <div>
                <strong>{propiedad.habitaciones}</strong>
                <span>Habitaciones</span>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🛁</span>
              <div>
                <strong>{propiedad.bathrooms}</strong>
                <span>Baños</span>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">📐</span>
              <div>
                <strong>{propiedad.m2}</strong>
                <span>m²</span>
              </div>
            </div>
          </div>

          {/* Descripción (si existe en tu JSON) */}
          {propiedad.descripcion && (
            <div className="property-description">
              <h3>Descripción</h3>
              <p>{propiedad.descripcion}</p>
            </div>
          )}

          {/* Características adicionales (si existen en tu JSON) */}
          {propiedad.caracteristicas && (
            <div className="property-additional-features">
              <h3>Características</h3>
              <ul>
                {propiedad.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>{caracteristica}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Botones de acción */}
          <div className="property-actions">
            <button className="contact-button primary">
              Contactar agente
            </button>
            <button className="visit-button secondary">
              Programar visita
            </button>
          </div>
        </div>
      </div>

      {/* Propiedades relacionadas */}
      <div className="related-properties">
        <h3>Propiedades similares</h3>
        <div className="related-properties-grid">
          {propertiesData
            .filter(prop => 
              prop.type === propiedad.type && 
              prop.id !== propiedad.id
            )
            .slice(0, 3)
            .map(prop => (
              <Link 
                key={prop.id} 
                to={`/property/${prop.id}`}
                className="related-property-card"
              >
                <img 
                  src={Propertiesimages[prop.id]} 
                  alt={prop.nombre}
                />
                <div className="related-property-info">
                  <h4>{prop.nombre}</h4>
                  <p>{prop.precio}</p>
                  <p>{prop.direccion}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};