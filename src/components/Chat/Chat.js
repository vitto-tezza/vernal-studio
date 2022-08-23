import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [chat, setchat] = useState(false);

  const toggleChat = () => {
    setchat(!chat);
  };

  return (
    <div className={`Chat ${chat ? "ChatIsActive" : ""}`} id="Chat">
      <div className="Chat-X" onClick={toggleChat}></div>
      <a
        href="https://wa.me/5491164572427"
        target="_blank"
        className="Chat-Link"
      >
        <div className="Chat-Image"></div>
      </a>
      <div className="Chat-Subcontainer">
        <p className="Chat-Text">- ¿En qué podemos ayudarte?</p>
        <p className="Chat-Title">
          ¡Hacenos tu consulta <br></br>por WhatsApp!
        </p>
      </div>
    </div>
  );
};

export default Chat;
