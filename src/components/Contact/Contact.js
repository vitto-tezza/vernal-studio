import React from "react";
/*css*/
import "./Contact.css";
/*images*/
import buttonContact from "../../utils/images/button-contact.png";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="container-contact-txt">
        <p className="container-contact-txt-title">-Hablamos?</p>
        <p className="container-contact-txt-subtitle">
          Juntos podemos <span className="contact-txt-span">potenciar</span> tu
          proyecto.
        </p>
        <p className="container-contact-txt-last">
          Escribinos para hacerlo realidad.
        </p>
      </div>
      <form className="container-contact-form" method="GET" action="">
        <input
          className="contact-name"
          type="text"
          name="inp_name"
          placeholder="cual es tu nombre?"
        />
        <input
          className="contact-email"
          type="text"
          name="inp_email"
          placeholder="cual es tu correo electronico?"
        />
        <br />
        <br />
        <textarea
          className="contact-coment"
          name="inp_mensaje"
          placeholder="comentanos sobre tu proyecto :)"
        ></textarea>
        <br />
        <div>
          <button className="contact-button-submit" type="submit">
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
