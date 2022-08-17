import React, { useState } from "react";
/*css*/
import "./Contact.css";
/*images*/
import buttonContact from "../../utils/images/button-contact.png";

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
    console.log(
      datos.inp_name + " " + datos.inp_email + " " + datos.inp_mensaje
    );
  };

  return (
    <div className="container-contact">
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
          required
        />
        <input
          className="contact-email"
          type="text"
          name="inp_email"
          placeholder="¿Cuál es tu correo electrónico?"
          onChange={handleInputChange}
          required
        />
        <textarea
          className="contact-coment"
          name="inp_mensaje"
          placeholder="Contanos sobre tu proyecto :)"
          onChange={handleInputChange}
          required
        ></textarea>
        <div>
          <button className="contact-button-submit" type="submit" id="submit">
            <img
              className="contact-button-submit-img"
              src={buttonContact}
            ></img>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
