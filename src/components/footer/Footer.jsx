import React from "react";

import { FaGithubSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import "./Footer.css"; // Importa el archivo CSS para estilos del footer
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="location footer-info-item">
          <IoLocationSharp />
          <p>Buenaventura, Colombia</p>
        </div>
        <div className="phone footer-info-item">
          <FaPhone />
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
              aria-label="Perfil de GitHub"
              name="perfil-GitHub"
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
              aria-label="Perfil de LinkedIn"
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
