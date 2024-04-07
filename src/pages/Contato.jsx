import React from "react";
import inst from "../img/insta.png";
import lin from "../img/in.png";
import face from "../img/face.png";
import fone from "../img/fone.png";
import Dlogo from "../img/LogoD.png";
import hora from "../img/hora.png";
import local from "../img/local.png";
import "../estilo/contato.css";

const Contato = () => {
  return (
    <section id="contato">
      <div className="contato_container" data-aos="zoom-in"  data-aos-duration="1000">
        <div className="primeira_parte">
          <div className="Contato__logo">
            <img src={Dlogo} alt="logoditis" />
            <h2 className="title">Ditis</h2>
          </div>
          <div className="informacoes_contato">
            <h3 className="seguir">Siga-nos</h3>
            <div className="icon-container">
              <img className="iconI" src={inst} alt="insta" />
              <img className="iconin" src={lin} alt="in" />
              <img className="iconface" src={face} alt="face" />
            </div>
            <div class="vertical-line"></div>
            <div className="Contatos">
              <h4 className="numero">Contato</h4>
              <img className="iconC" src={fone} alt="fone" />
              <p>4299920394049</p>
              <div className="hora">
                <img className="iconH" src={hora} alt="hora" />
                <p1>Horário de atendimento: 8h - 17h</p1>
              </div>
              <div className="local">
                <img className="iconL" src={local} alt="local" />
                <p3>Rua: |Guarapuava - PR</p3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
