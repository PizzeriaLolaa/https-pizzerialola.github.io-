import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Contact.css";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h2 className="heading2">Dostava 200 RSD <br/>(na teritoriji Jošaničke Banje)</h2>
        <span className="phone">+381 65 66-96-176</span>
        <h1>Pizzeria Lola</h1>
        <p>
          Ukoliko imate neka pitanja ili sugestije za nas, molimo Vas, javite
          nam se.
        </p>
        <div className="contact-info">
          <FaPhone className="react-icons" />
          <span>+381 65 252-8-252</span>
          <span>+381 66 580-80-80</span>
          <FaMapMarkerAlt className="react-icons" />
          <span>Milunke Savić bb, Jošanička Banja</span>
          <a href="https://www.instagram.com/pizzeria_lola/"><FaInstagram className="insta"/></a>
        </div>
      </div>
    </div>
  );
};

