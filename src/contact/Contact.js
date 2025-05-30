export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="tu@email.com" />
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" placeholder="Tu mensaje..."></textarea>
        </div>
        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>
    </div>
  );
};