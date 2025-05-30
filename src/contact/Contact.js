export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a encontrar la propiedad perfecta</p>
      </div>

      <div className="contact-wrapper">
        {/* Información de contacto */}
        <div className="contact-info">
          <h2>Información</h2>
          <ul>
            <li>
              <span>📍</span>
              <p>Carrer de la Força, 15<br />17004 Girona, España</p>
            </li>
            <li>
              <span>📞</span>
              <p>+34 972 123 456<br />+34 600 987 654</p>
            </li>
            <li>
              <span>✉️</span>
              <p>info@inmobiliariagirona.com<br />ventas@inmobiliariagirona.com</p>
            </li>
            <li>
              <span>🕒</span>
              <p>Lunes a Viernes: 9:00 - 19:00<br />Sábados: 9:00 - 14:00</p>
            </li>
          </ul>

          <div className="social">
            <h3>Síguenos</h3>
            <div>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className="contact-form">
          <h2>Envíanos un mensaje</h2>
          <input type="text" placeholder="Nombre *" required />
          <input type="email" placeholder="Correo electrónico *" required />
          <input type="tel" placeholder="Teléfono" />
          <select>
            <option value="">Asunto</option>
            <option value="compra">Compra</option>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
            <option value="tasacion">Tasación</option>
            <option value="otro">Otro</option>
          </select>
          <textarea placeholder="Mensaje *" required></textarea>

          <div className="checkbox">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              Acepto la <a href="#">política de privacidad</a>
            </label>
          </div>


          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
};
