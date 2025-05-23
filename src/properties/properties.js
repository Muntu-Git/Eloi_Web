import React, { useState } from "react";
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
              <p><strong>Dirección:</strong> {prop.direccion}</p>
              <p><strong>Precio:</strong> {prop.precio}</p>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};
