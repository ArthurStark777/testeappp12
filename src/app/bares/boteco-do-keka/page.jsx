"use client";

import { useRouter } from "next/navigation";
import Carrossel from "@/components/Carrossel";

export default function DetalhesBar() {
  const router = useRouter();
  
  const bar = {
    nome: "Boteco do Keka Prime",
    slug: "boteco-do-keka",
    avaliacao: "⭐ 4.5 Muito bom",
    preco: "R$ 40 - 60",
    beneficios: ["Música ao vivo", "Aceita reservas"],
    descricao: "Elegância descomplicada. Drinks premium, ambiente intimista e atendimento impecável. Perfeito para dates especiais ou comemorar aquela promoção no trabalho.",
    endereco: "R. Alferes Jorge, 398 - Indianópolis, Caruaru - PE",
    horarios: [
      { dia: "Sábado", horario: "18:30 - 04:00" },
      { dia: "Domingo", horario: "18:30 - 02:00" },
      { dia: "Segunda-feira", horario: "18:30 - 02:00" },
      { dia: "Terça-feira", horario: "18:30 - 02:00" },
      { dia: "Quarta-feira", horario: "18:30 - 01:00" },
      { dia: "Quinta-feira", horario: "18:30 - 01:30" },
      { dia: "Sexta-feira", horario: "18:30 - 02:00" },
    ]
  };

  // Array de imagens deste bar
  const imagensBar = [
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%281%29.jpg",
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%282%29.jpg",
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%283%29.jpg",
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%284%29.jpg",
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%285%29.jpg",
    "/imagens/imagens.bares/boteco%20do%20keka/boteco%20do%20keka%20%286%29.jpg",
  ];

  const styles = {
    container: {
      background: "#007A8D",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "40px"
    },
    titulo: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      gap: "20px"
    },
    setaVoltar: {
      background: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px 15px",
      fontSize: "24px",
      cursor: "pointer",
      color: "#007A8D"
    },
    tituloCentral: {
      background: "white",
      color: "#007A8D",
      padding: "10px 25px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "22px",
      fontWeight: "bold",
      flex: 1,
      justifyContent: "center"
    },
    conteudo: {
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto"
    },
    nomeBar: {
      fontSize: "32px",
      margin: "20px 0 10px 0",
      color: "#00FFAA",
      textAlign: "center"
    },
    infoBasica: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginBottom: "30px",
      flexWrap: "wrap"
    },
    avaliacao: {
      fontSize: "18px",
      color: "#FFD700",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    },
    preco: {
      fontSize: "18px",
      color: "#00FFAA",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    },
    secao: {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
      padding: "25px",
      marginBottom: "25px",
      backdropFilter: "blur(5px)"
    },
    subtitulo: {
      color: "#00FFAA",
      margin: "0 0 20px 0",
      fontSize: "22px",
      borderBottom: "2px solid #00FFAA",
      paddingBottom: "8px"
    },
    beneficios: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "center"
    },
    beneficio: {
      background: "rgba(0, 255, 170, 0.2)",
      padding: "10px 20px",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "1px solid rgba(0, 255, 170, 0.3)"
    },
    check: {
      color: "#00FFAA",
      fontWeight: "bold",
      fontSize: "18px"
    },
    horarioItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    },
    carrosselContainer: {
      margin: "30px 0",
      background: "rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "15px"
    },
    carrosselTitulo: {
      textAlign: "center",
      color: "#00FFAA",
      marginBottom: "20px",
      fontSize: "20px"
    },
    botaoReserva: {
      width: "100%",
      padding: "18px",
      background: "linear-gradient(135deg, #0095FF, #00BFFF)",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "30px",
      transition: "transform 0.2s, box-shadow 0.2s",
      boxShadow: "0 4px 15px rgba(0, 149, 255, 0.3)"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.titulo}>
        <button style={styles.setaVoltar} onClick={() => router.back()}>
          ←
        </button>
        <div style={styles.tituloCentral}>
          <span style={{fontSize: "22px"}}>🍸</span>
          <span>Detalhes do Bar</span>
        </div>
      </div>

      <div style={styles.conteudo}>
        <h1 style={styles.nomeBar}>{bar.nome}</h1>

        <div style={styles.infoBasica}>
          <div style={styles.avaliacao}>
            <span>⭐</span> {bar.avaliacao}
          </div>
          <div style={styles.preco}>
            <span>💰</span> {bar.preco}
          </div>
        </div>

        {/* CARROSSEL DE IMAGENS */}
        <div style={styles.carrosselContainer}>
          <h3 style={styles.carrosselTitulo}>Galeria de Fotos</h3>
          <Carrossel 
            imagens={imagensBar}
            altText={bar.nome}
          />
          <p style={{textAlign: "center", marginTop: "15px", opacity: 0.8, fontSize: "14px"}}>
            Use as setas ou clique nos pontos para navegar
          </p>
        </div>

        <div style={styles.secao}>
          <h2 style={styles.subtitulo}>📖 Descrição</h2>
          <p style={{lineHeight: "1.6", fontSize: "16px"}}>{bar.descricao}</p>
        </div>

        <div style={styles.secao}>
          <h2 style={styles.subtitulo}>📍 Endereço</h2>
          <p style={{fontSize: "16px", display: "flex", alignItems: "center", gap: "10px"}}>
            <span style={{fontSize: "20px"}}>🏠</span> {bar.endereco}
          </p>
        </div>

        <div style={styles.secao}>
          <h2 style={styles.subtitulo}>🕒 Horários de Funcionamento</h2>
          {bar.horarios.map((item, index) => (
            <div key={index} style={styles.horarioItem}>
              <strong>{item.dia}:</strong> 
              <span>{item.horario}</span>
            </div>
          ))}
        </div>

        <div style={styles.secao}>
          <h2 style={styles.subtitulo}>✨ Benefícios</h2>
          <div style={styles.beneficios}>
            {bar.beneficios.map((beneficio, index) => (
              <div key={index} style={styles.beneficio}>
                <span style={styles.check}>✓</span> {beneficio}
              </div>
            ))}
          </div>
        </div>

        <button 
          style={styles.botaoReserva}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 149, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 149, 255, 0.3)";
          }}
        >
          🍻 Reservar Mesa Agora
        </button>
      </div>
    </div>
  );
}
