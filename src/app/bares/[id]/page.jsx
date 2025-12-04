"use client";

import { useRouter } from "next/navigation";

export default function DetalhesBar({ params }) {
  const router = useRouter();
  
  // Converter para string para garantir compatibilidade
  const id = String(params?.id || "1");
  
  // DADOS COMPLETOS DOS 5 BARES
  const todosBares = {
    "1": {
      nome: "Boteco do Keka Prime",
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
        { dia: "Sexta-feira", horario: "18:30 - 02:00" }
      ]
    },
    "2": {
      nome: "Seu Zé lounge",
      avaliacao: "⭐ 4.6 Excelente",
      preco: "R$ 40 - 60",
      beneficios: ["Organiza eventos", "Ótimos drinks"],
      descricao: "Boteco com alma! Cachaças artesanais, porções generosas e clima acolhedor. Parece a varanda da casa do seu Zé - onde a conversa rola solta e o sabor é caseiro.",
      endereco: "R. Francisco Joaquim, 100 - Maurício de Nassau, Caruaru - PE",
      horarios: [
        { dia: "Sábado", horario: "16:00 - 03:00" },
        { dia: "Domingo", horario: "16:00 - 02:00" },
        { dia: "Segunda-feira", horario: "Fechado" },
        { dia: "Terça-feira", horario: "Fechado" },
        { dia: "Quarta-feira", horario: "16:00 - 02:00" },
        { dia: "Quinta-feira", horario: "16:00 - 02:00" },
        { dia: "Sexta-feira", horario: "16:00 - 03:00" }
      ]
    },
    "3": {
      nome: "Metal Beer",
      avaliacao: "⭐ 4.7 Excelente",
      preco: "R$ 30 - 50",
      beneficios: ["Tem música ao vivo", "Serve ótimos coquetéis"],
      descricao: "O point dos amantes de rock e cerveja artesanal! Ambiente descontraído, drinks marcantes e um som que vai do clássico ao metal. Ideal para curtir com os amigos e provar rótulos diferenciados.",
      endereco: "R. Antônio Satu, 68 - Nossa Sra. das Dores, Caruaru - PE",
      horarios: [
        { dia: "Sábado", horario: "17:00 - 00:00" },
        { dia: "Domingo", horario: "17:00 - 00:00" },
        { dia: "Segunda-feira", horario: "Fechado" },
        { dia: "Terça-feira", horario: "Fechado" },
        { dia: "Quarta-feira", horario: "18:00 - 00:00" },
        { dia: "Quinta-feira", horario: "18:00 - 00:00" },
        { dia: "Sexta-feira", horario: "18:00 - 00:00" }
      ]
    },
    "4": {
      nome: "Petiscaria do titio",
      avaliacao: "⭐ 4.5 Muito bom",
      preco: "R$ 40 - 60",
      beneficios: ["Cardápio variado", "Tem mesas externas"],
      descricao: "Especializada em petiscos e pratos típicos da culinária brasileira, o lugar tem aquela vibe gostosa de boteco - perfeito para reunir os amigos, bater um papo e saborear drinks gelados acompanhados de porções generosas.",
      endereco: "Av. Prof. José Leão, 425 - Maurício de Nassau, Caruaru - PE",
      horarios: [
        { dia: "Sábado", horario: "13:00 - 02:00" },
        { dia: "Domingo", horario: "13:00 - 02:00" },
        { dia: "Segunda-feira", horario: "16:00 - 02:00" },
        { dia: "Terça-feira", horario: "16:00 - 02:00" },
        { dia: "Quarta-feira", horario: "16:00 - 02:00" },
        { dia: "Quinta-feira", horario: "16:00 - 02:00" },
        { dia: "Sexta-feira", horario: "13:00 - 02:00" }
      ]
    },
    "5": {
      nome: "Fulano de tal",
      avaliacao: "⭐ 4.5 Muito bom",
      preco: "R$ 40 - 70",
      beneficios: ["Organiza eventos", "Música ao vivo"],
      descricao: "Barzinho moderno com cara de boteco gourmet. Petiscos criativos, drinks bem feitos e um happy hour animado. Ótimo para quem quer bom custo-benefício sem abrir mão do sabor.",
      endereco: "Av. Agamenon Magalhães, 1210 - Maurício de Nassau, Caruaru - PE",
      horarios: [
        { dia: "Sábado", horario: "16:00 - 03:00" },
        { dia: "Domingo", horario: "16:00 - 01:00" },
        { dia: "Segunda-feira", horario: "Fechado" },
        { dia: "Terça-feira", horario: "Fechado" },
        { dia: "Quarta-feira", horario: "16:00 - 01:00" },
        { dia: "Quinta-feira", horario: "16:00 - 03:00" },
        { dia: "Sexta-feira", horario: "16:00 - 03:00" }
      ]
    }
  };
  
  // DEBUG: Mostrar no console qual ID está chegando
  console.log("ID recebido:", id, "Tipo:", typeof id);
  
  // Pega os dados do bar específico
  const bar = todosBares[id] || {
    nome: `Bar ${id}`,
    avaliacao: "⭐ 4.0 Bom",
    preco: "R$ 50-80",
    beneficios: ["Happy Hour", "Wi-Fi grátis"],
    descricao: "Um ótimo bar para relaxar.",
    endereco: "Endereço não especificado",
    horarios: [
      { dia: "Segunda a Domingo", horario: "18:00 - 00:00" }
    ]
  };

  // DEBUG: Mostrar qual bar está sendo carregado
  console.log("Bar carregado:", bar.nome);

  // ESTILOS (mesmos de antes)
  const styles = {
    container: {
      background: "#007A8D",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif"
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
      padding: "20px"
    },
    nomeBar: {
      fontSize: "28px",
      margin: "0 0 20px 0",
      color: "#00FFAA"
    },
    infoBasica: {
      display: "flex",
      gap: "30px",
      marginBottom: "30px"
    },
    avaliacao: {
      fontSize: "18px",
      color: "#FFD700",
      fontWeight: "bold"
    },
    preco: {
      fontSize: "18px",
      color: "#00FFAA",
      fontWeight: "bold"
    },
    secao: {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px"
    },
    subtitulo: {
      color: "#00FFAA",
      margin: "0 0 15px 0",
      fontSize: "20px"
    },
    beneficios: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px"
    },
    beneficio: {
      background: "rgba(0, 255, 170, 0.2)",
      padding: "8px 15px",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    check: {
      color: "#00FFAA",
      fontWeight: "bold"
    },
    botaoReserva: {
      width: "100%",
      padding: "15px",
      background: "#0095FF",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "18px",
      marginTop: "20px"
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
          <div style={styles.avaliacao}>{bar.avaliacao}</div>
          <div style={styles.preco}>{bar.preco}</div>
        </div>

        {bar.descricao && (
          <div style={styles.secao}>
            <h2 style={styles.subtitulo}>Descrição</h2>
            <p>{bar.descricao}</p>
          </div>
        )}

        {bar.endereco && (
          <div style={styles.secao}>
            <h2 style={styles.subtitulo}>Endereço</h2>
            <p>{bar.endereco}</p>
          </div>
        )}

        {bar.horarios && bar.horarios.length > 0 && (
          <div style={styles.secao}>
            <h2 style={styles.subtitulo}>Horários de Funcionamento</h2>
            {bar.horarios.map((item, index) => (
              <div key={index} style={{margin: "5px 0"}}>
                <strong>{item.dia}:</strong> {item.horario}
              </div>
            ))}
          </div>
        )}

        {bar.beneficios && bar.beneficios.length > 0 && (
          <div style={styles.secao}>
            <h2 style={styles.subtitulo}>Benefícios</h2>
            <div style={styles.beneficios}>
              {bar.beneficios.map((beneficio, index) => (
                <div key={index} style={styles.beneficio}>
                  <span style={styles.check}>✓</span> {beneficio}
                </div>
              ))}
            </div>
          </div>
        )}

        <button style={styles.botaoReserva}>Reservar Mesa</button>
      </div>
    </div>
  );
}
