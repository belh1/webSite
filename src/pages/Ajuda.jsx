import React, { useState, useEffect, useMemo } from "react";
import "../estilo/ajuda.css";
import duvida from "../img/duvida.png";

const Ajuda = () => {
  const perguntasFrequentes = useMemo(() => [
    {
      pergunta: "Como faço para criar uma conta?",
      resposta:
        "Para criar uma conta, clique no botão 'Registrar-se' e siga as instruções.",
      index: 0,
      categoria: "Interna",
    },
    {
      pergunta: "Como faço para alterar minha senha?",
      resposta:
        "Para alterar sua senha, acesse suas configurações de conta e clique na opção 'Alterar senha'.",
      index: 1,
      categoria: "Interna",
    },
    {
      pergunta: "Como posso acessar meus dados pessoais?",
      resposta:
        "Para acessar seus dados pessoais, faça login em sua conta e clique na opção 'Minha Conta'.",
      index: 2,
      categoria: "Interna",
    },
    {
      pergunta: "Como posso configurar minha conexão Wi-Fi?",
      resposta:
        "Para configurar sua conexão Wi-Fi, vá para as configurações de rede em seu dispositivo e selecione sua rede Wi-Fi.",
      index: 3,
      categoria: "Rede",
    },
    {
      pergunta: "Como posso resolver problemas de conexão com a internet?",
      resposta:
        "Se estiver enfrentando problemas de conexão com a internet, verifique sua conexão Wi-Fi e reinicie seu roteador, se necessário.",
      index: 4,
      categoria: "Rede",
    },
    {
      pergunta: "Como posso aumentar a velocidade da minha conexão?",
      resposta:
        "Para aumentar a velocidade da sua conexão, verifique se há interferências na rede e considere atualizar seu plano de internet.",
      index: 5,
      categoria: "Rede",
    },
    {
      pergunta: "Onde posso encontrar o manual do usuário do meu dispositivo?",
      resposta:
        "Você pode encontrar o manual do usuário do seu dispositivo na seção de suporte do site do fabricante ou nas configurações do dispositivo.",
      index: 6,
      categoria: "Física",
    },
    {
      pergunta: "Como posso obter assistência técnica para meu dispositivo?",
      resposta:
        "Para obter assistência técnica para seu dispositivo, entre em contato com o suporte técnico do fabricante ou visite uma loja autorizada.",
      index: 7,
      categoria: "Física",
    },
    {
      pergunta: "Como posso limpar e manter meu dispositivo?",
      resposta:
        "Para limpar e manter seu dispositivo, consulte o manual do usuário para obter instruções específicas do fabricante.",
      index: 8,
      categoria: "Física",
    }
  ], []);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Interna");
  const [perguntasFiltradas, setPerguntasFiltradas] = useState([]);

  useEffect(() => {
    const perguntasFiltradas = perguntasFrequentes.filter(
      (pergunta) => pergunta.categoria === categoriaSelecionada
    );
    setPerguntasFiltradas(perguntasFiltradas);
  }, [categoriaSelecionada, perguntasFrequentes]);

  const [mostrarResposta, setMostrarResposta] = useState({});

  const alternarResposta = (index) => {
    setMostrarResposta({
      ...mostrarResposta,
      [index]: !mostrarResposta[index],
    });
  };

  return (
    <section id="ajuda">
      <div className="PerguntaF_container">
        <div className="perguntas__top">
          <h2 className="sectionP__title">Perguntas Frequentes</h2>
          <p>Encontre respostas para suas dúvidas mais frequentes abaixo:</p>
          <div className="categoria-buttons">
            <button onClick={() => setCategoriaSelecionada("Interna")}>
              Interna
            </button>
            <button onClick={() => setCategoriaSelecionada("Rede")}>
              Rede
            </button>
            <button onClick={() => setCategoriaSelecionada("Física")}>
              Física
            </button>
          </div>
        </div>
        <div className="perguntas__lista">
          {perguntasFiltradas.map((pergunta) => (
            <div key={pergunta.index} className="pergunta">
              <div
                className="pergunta__titulo"
                onClick={() => alternarResposta(pergunta.index)}
              >
                <img src={duvida} alt="Ponto de Interrogação" className="duvida" />
                <h3>{pergunta.pergunta}</h3>
                <span>{mostrarResposta[pergunta.index] ? "-" : "+"}</span>
              </div>
              {mostrarResposta[pergunta.index] && (
                <p className="pergunta__resposta">{pergunta.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ajuda;
