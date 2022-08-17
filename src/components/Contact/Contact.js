import React from "react";
/*css*/
import "./Contact.css";
/*images*/
import buttonContact from "../../utils/images/button-contact.png";

function Contact() {
  const $form = document.querySelector("#form");
  const d = document;

  $form.addEventListener("submit", handleSumbit);

  function handleSumbit(event) {
    event.preventDefault();

    const $resp = d.querySelector("#response");

    const $contactLoader = d.querySelector("#contact-loader");

    $contactLoader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/vittorio.tezza93@gmail.com", {
      method: "POST",
      body: new FormData(event.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $contactLoader.classList.add("none");
        $resp.classList.remove("none");
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      >
        <input
          className="contact-name"
          type="text"
          name="inp_name"
          placeholder="¿Cuál es tu nombre?"
          required
        />
        <input
          className="contact-email"
          type="text"
          name="inp_email"
          placeholder="¿Cuál es tu correo electrónico?"
          required
        />
        <textarea
          className="contact-coment"
          name="inp_mensaje"
          placeholder="Contanos sobre tu proyecto :)"
          required
        ></textarea>
        <div>
          <button className="contact-button-submit" type="submit" id="submit">
            <img
              className="contact-button-submit-img"
              src={buttonContact}
            ></img>
          </button>
          <div class="contact-form-response none mobile" id="response">
            <p>Tu mensaje ha sido enviado</p>
          </div>
          <div class="contact-form-loader none" id="contact-loader">
            <p>cargando</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
