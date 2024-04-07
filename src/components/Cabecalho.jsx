import React, { useRef, useEffect, useState } from "react";
import '../estilo/cabecalho.css'; 
import logo from '../img/logoP.png';

const Cabecalho = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const inicioRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const clicar = (e, path) => {
        e.preventDefault();
        const elementoAlvo = document.querySelector(path);
    
        if (elementoAlvo) {
            const local = elementoAlvo.offsetTop;
    
            window.scrollTo({
                left: 0,
                top: local - 80,
                behavior: 'smooth'
            });
        }
        setMenuOpen(false); // Fechar o menu ao clicar em um item
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const nav_links = [
        { path: "#inicio", display: "Inicio" },
        { path: "#sobre", display: "Sobre" },
        { path: "#infor", display: "Informação" },
        { path: "#ajuda", display: "Ajuda" },
        { path: "#contato", display: "Contato" },
    ];
    
    return (
        <header className={scrollPosition > 80 ? "cabecalho cabecalho-opaco" : "cabecalho"} ref={inicioRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="Logo" /> 
                        </div>
                        <h2>Secretaria de Saúde</h2>
                    </div>

                    {/* Botão de menu para telas menores */}
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
                    </button>

                    {/* Menu para telas maiores */}
                    <div className={`navigation ${menuOpen ? 'open' : ''}`}>
                        <ul className="menu">
                            {nav_links.map(item => (
                                <li className="nav__item" key={item.display}>
                                    <a href={item.path} onClick={(e) => clicar(e, item.path)}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Cabecalho;
