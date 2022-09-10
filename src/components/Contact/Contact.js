import React, { useState } from "react";
import contactLoader from "../../utils/images/loader.svg";
/*css*/
import "./Contact.css";

const Contact = () => {
  const [response, setResponse] = useState("");
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

    fetch("https://formsubmit.co/ajax/hello@vernalstudio.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok ? setResponse("Mensaje enviado") : Promise.reject(res)
      )
      .catch(
        (error) => console.log(error),
        setResponse(<img alt="" className="loader" src={contactLoader}></img>)
      )
      .finally(() => {
        setDatos({
          inp_name: "",
          inp_email: "",
          inp_mensaje: "",
        });
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
            <p className="contact-button-submit-text"> Enviar </p>
            <div className="contact-button-submit-img "></div>
          </button>
        </div>
        <div className="contact-response">
          <div className="contact-response-text" id="contact-response">
            {response}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
