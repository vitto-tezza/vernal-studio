import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [chat, setchat] = useState(false);

  const toggleChat = () => {
    setchat(!chat);
  };

  return (
    <a className={`Chat ${chat ? "ChatIsActive" : ""}`} id="Chat">
      <div className="Chat-X" onClick={toggleChat}></div>
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
