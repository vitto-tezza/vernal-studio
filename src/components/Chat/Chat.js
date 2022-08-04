import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <a className="Chat" id="Chat">
      <div className="Chat-X"></div>
      <div className="Chat-Image"></div>
      <div className="Chat-Subcontainer">
        <p className="Chat-Text">- ¿En qué podemos ayudarte?</p>
        <p className="Chat-Title">
          ¡Hacenos tu consulta <br></br>por WhatsApp!
        </p>
      </div>
    </a>
  );
};

export default Chat;
