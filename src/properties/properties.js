import React, { useState } from "react";
import { Link } from "react-router-dom"; // Agregar esta importación
import propertiesData from "../data/properties.json";
import Propertiesimages from "../images";

export const Properties = () => {
  const [tipoActivo, setTipoActivo] = useState("casa");

  const propiedadesFiltradas = propertiesData.filter(
    (propiedad) => propiedad.type === tipoActivo
  );

  return (
    <div className="properties-container">
      <h1>Propiedades en Venta</h1>

      <div className="properties-buttons">
        <button
          className={`properties-button ${tipoActivo === "casa" ? "active" : ""}`}
          onClick={() => setTipoActivo("casa")}
        >
          Casas
        </button>
        <button
          className={`properties-button ${tipoActivo === "apartamento" ? "active" : ""}`}
          onClick={() => setTipoActivo("apartamento")}
        >
          Apartamentos
        </button>
      </div>

      <div className="properties-list">
        {propiedadesFiltradas.map((prop) => (
          <div key={prop.id} className="properties-card">
            <img
              className="properties-card-image"
              src={Propertiesimages[prop.id]}
              alt={prop.nombre}
            />
            <div className="properties-card-text">
              <h2>{prop.nombre}</h2>
              <p><strong>Precio:</strong> {prop.precio}</p>
              <p><strong>Dirección:</strong> {prop.direccion}</p>
              
              <ul>
                <li><strong>🛏️Habitaciones:</strong> {prop.habitaciones}</li>
                <li><strong>🛁Baños:</strong> {prop.bathrooms}</li>
                <li><strong>📐M²:</strong> {prop.m2}</li>
              </ul>
              
              {/* CAMBIO: Link en lugar de button */}
              <Link 
                to={`/property/${prop.id}`} 
                className="properties-button-card"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};