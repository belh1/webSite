import React, { useState } from "react";
import '../estilo/informacao.css'; 
import dados from '../pages/dados'; 

const Informacao = () => {
    // Estado para controlar a notícia selecionada para exibir em um modal
    const [selectedNoticia, setSelectedNoticia] = useState(null);
    // Estado para controlar o número de notícias visíveis
    const [visibleNoticias, setVisibleNoticias] = useState(3);

    // Função para abrir o modal com os detalhes da notícia selecionada
    const openModal = (noticia) => {
        setSelectedNoticia(noticia);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedNoticia(null);
    };

    // Função para mostrar mais notícias
    const handleVerMais = () => {
        setVisibleNoticias(prev => prev + 2); // Aumentar o número de notícias visíveis em 2
    };

    // Função para mostrar menos notícias
    const handleVerMenos = () => {
        setVisibleNoticias(3);
    };

    // Renderização do componente
    return (
        <section id="infor">
            <div className="noticias_container">
                {/* Título da seção de notícias */}
                <h2 className="noticias_title">Últimas Informações</h2>
                {/* Descrição da seção de notícias */}
                <p className="noticias_description">Aqui você encontra as informações mais recentes e relevantes para ficar atualizado.</p>
                {/* Grid para exibir as notícias */}
                <div className="noticias_grid">
                    {dados.slice(0, visibleNoticias).map((noticia, index) => (
                        <div key={index} className={`noticia_card ${index === 2 ? 'noticia_large' : ''}`}>
                            <div className="noticia_content" style={{backgroundImage: `url(${noticia.imgUrl})`}}>
                                {/* Título da notícia */}
                                <h3 className="noticia_titulo">{noticia.title}</h3>
                                {/* Botão para ler mais detalhes da notícia */}
                                <button className="btnLeia" onClick={() => openModal(noticia)}>Leia Mais</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Botão para ver mais ou menos notícias, dependendo do estado */}
                {visibleNoticias < dados.length ? (
                    <button className="ver" onClick={handleVerMais}>Ver Mais</button>
                ) : (
                    <button className="ver" onClick={handleVerMenos}>Ver Menos</button>
                )}
            </div>
            {/* Modal para exibir os detalhes da notícia selecionada */}
            {selectedNoticia && (
                <div className="modal-overlay">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Botão para fechar o modal */}
                        <button className="close-btn" onClick={closeModal}>X</button>
                        {/* Imagem da notícia */}
                        <img className="modal-img" src={selectedNoticia.imgUrl} alt={selectedNoticia.title} />
                        {/* Título da notícia */}
                        <h3>{selectedNoticia.title}</h3>
                        {/* Descrição da notícia */}
                        <h4>{selectedNoticia.description}</h4>
                        {/* Link para o site da notícia */}
                        <a href={selectedNoticia.siteUrl} target="_blank" rel="noopener noreferrer">{selectedNoticia.siteUrl}</a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Informacao;
