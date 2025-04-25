import React from "react";
import "./Footer.css"; // Importa el archivo CSS para estilos del footer

import { FaGithubSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="location footer-info-item">
          <IoLocationSharp className="icon-footer" />
          <p>Buenaventura, Colombia</p>
        </div>
        <div className="phone footer-info-item">
          <FaPhone className="icon-footer" />
          <p>(+57)00000000</p>
        </div>
      </div>
      <div className="footer-about-company">
        <h1>Vibras Store</h1>
        <p>
          Tu espacio para descubrir productos únicos a precios increíbles. 🌟
          Nos enfocamos en ofrecerte calidad, estilo y variedad en un solo
          lugar. Ya sea que busques lo último en tendencia, regalos originales o
          simplemente darte un gusto, aquí encontrarás lo que necesitas con
          ofertas irresistibles.
        </p>
        <div className="socials">
          <div className="social">
            <a
              href="https://github.com/YonierGM"
              target="_blank"
              rel="noopener noreferrer"
              name="perfil-github"
              className="github"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/yoniergm/"
              target="_blank"
              rel="noopener noreferrer"
              name="perfil-linkedin"
              className="linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
