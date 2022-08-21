import React, { useState } from "react";
/*css*/
import "./Contact.css";

const Contact = () => {
  const [datos, setDatos] = useState({
    inp_name: "",
    inp_email: "",
    inp_mensaje: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    fetch("https://formsubmit.co/ajax/vittorio.tezza93@gmail.com", {
      method: "post",
      body: new FormData(event.target),
    });
    setDatos({
      inp_name: "",
      inp_email: "",
      inp_mensaje: "",
    });
  };

  return (
    <div className="container-contact" id="Contact">
      <div className="container-contact-txt">
        <p className="container-contact-txt-title">- ¿Hablamos?</p>
        <p className="container-contact-txt-subtitle">
          Juntos podemos <span className="contact-txt-span">potenciar</span> tu
          proyecto.
        </p>
        <p className="container-contact-txt-last">
          Escribinos para hacerlo realidad.
        </p>
      </div>
      <form
        className="container-contact-form"
        method="post"
        action=""
        id="form"
        onSubmit={enviarDatos}
      >
        <input
          className="contact-name"
          type="text"
          name="inp_name"
          placeholder="¿Cuál es tu nombre?"
          onChange={handleInputChange}
          value={datos.inp_name}
          required
        />
        <input
          className="contact-email"
          type="text"
          name="inp_email"
          placeholder="¿Cuál es tu correo electrónico?"
          onChange={handleInputChange}
          value={datos.inp_email}
          required
        />
        <textarea
          className="contact-coment"
          name="inp_mensaje"
          placeholder="Contanos sobre tu proyecto :)"
          onChange={handleInputChange}
          value={datos.inp_mensaje}
          required
        ></textarea>
        <div className="contact-button-container">
          <button className="contact-button-submit" type="submit" id="submit">
            Enviar <div className="contact-button-submit-img"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
