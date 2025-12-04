"use client";

import { useRouter } from "next/navigation";

export default function HoteisPage() {
  const router = useRouter();
  
  const hoteis = [
    {
      id: "citi-hotel-residence",
      nome: "Citi Hotel Residence Caruaru",
      avaliacao: "⭐ 4.8 Excelente",
      preco: "R$ 281",
      beneficios: ["Café da manhã incluído", "Wi-Fi grátis", "Piscina"]
    },
    {
      id: "citi-hotel-express",
      nome: "Citi Hotel Express Caruaru",
      avaliacao: "⭐ 4.7 Excelente",
      preco: "R$ 261",
      beneficios: ["Café da manhã incluído", "Estacionamento", "Serviço de quarto"]
    },
    {
      id: "hotel-maysa",
      nome: "Hotel Maysa Caruaru",
      avaliacao: "⭐ 4.5 Muito bom",
      preco: "R$ 298",
      beneficios: ["Academia 24h", "Café da manhã", "Wi-Fi grátis"]
    },
    {
      id: "wa-hotel",
      nome: "WA Hotel Caruaru",
      avaliacao: "⭐ 4.9 Excelente",
      preco: "R$ 311",
      beneficios: ["Cancelamento grátis", "Estacionamento", "Próximo ao shopping"]
    },
    {
      id: "hotel-village",
      nome: "Hotel Village Premium Caruaru",
      avaliacao: "⭐ 4.6 Muito bom",
      preco: "R$ 275",
      beneficios: ["Piscina", "Academia", "Restaurante", "Wi-Fi grátis"]
    },
  ];

  return (
    <div style={{
      background: "#007A8D",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "50px"
    }}>
      {/* HEADER */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        gap: "20px"
      }}>
        <button 
          onClick={() => router.push("/")}
          style={{
            background: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px 15px",
            fontSize: "24px",
            cursor: "pointer",
            color: "#007A8D"
          }}
        >
          ←
        </button>
        <div style={{
          background: "white",
          padding: "10px 25px",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#007A8D"
        }}>
          <span>🏨</span>
          <span>Hotéis</span>
        </div>
      </div>

      {/* BARRA DE PESQUISA SIMPLES */}
      <div style={{
        background: "white",
        margin: "0 20px 20px",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        gap: "10px"
      }}>
        <input 
          type="text" 
          placeholder="Para onde vai?"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px"
          }}
        />
        <button 
          style={{
            padding: "10px 20px",
            background: "#0095FF",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          Buscar
        </button>
      </div>

      {/* CARDS */}
      <div style={{
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "25px"
      }}>
        {hoteis.map((hotel) => (
          <div 
            key={hotel.id} 
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              transition: "transform 0.15s",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* IMAGEM */}
            <div style={{
              height: "150px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "12px",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "50px"
            }}>
              🏨
            </div>
            
            {/* NOME */}
            <h3 style={{ 
              margin: "10px 0 5px", 
              fontSize: "18px", 
              color: "#222",
              fontWeight: "bold"
            }}>
              {hotel.nome}
            </h3>
            
            {/* AVALIAÇÃO */}
            <p style={{ 
              fontSize: "14px", 
              color: "#1e8e3e", 
              margin: "3px 0",
              fontWeight: "bold"
            }}>
              {hotel.avaliacao}
            </p>
            
            {/* PREÇO */}
            <div style={{ 
              margin: "8px 0 10px"
            }}>
              <span style={{ 
                fontSize: "12px", 
                color: "#666",
                display: "block",
                marginBottom: "2px"
              }}>
                a partir de
              </span>
              <span style={{ 
                fontSize: "24px", 
                color: "#007A8D",
                fontWeight: "bold"
              }}>
                R$ <strong>{hotel.preco.split("R$ ")[1]}</strong>
                <span style={{
                  fontSize: "14px",
                  color: "#666",
                  fontWeight: "normal",
                  marginLeft: "4px"
                }}>
                  /noite
                </span>
              </span>
            </div>
            
            {/* BENEFÍCIOS */}
            <div style={{ margin: "10px 0 15px", flex: 1 }}>
              {hotel.beneficios.map((beneficio, index) => (
                <p key={index} style={{
                  fontSize: "13px",
                  color: "#559a35",
                  margin: "4px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}>
                  <span style={{ fontSize: "16px" }}>✓</span> {beneficio}
                </p>
              ))}
            </div>
            
            {/* BOTÃO */}
            <button 
              onClick={() => router.push(`/hoteis/${hotel.id}`)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                background: "#0095FF",
                color: "white",
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "auto"
              }}
            >
              Ver ofertas »
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER SIMPLES */}
      <div style={{
        margin: "30px 20px 0",
        padding: "20px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        textAlign: "center",
        color: "white"
      }}>
        <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
          ✨ Encontre a hospedagem perfeita para sua viagem
        </p>
        <div style={{ 
          display: "flex", 
          gap: "15px", 
          justifyContent: "center",
          fontSize: "12px",
          marginTop: "15px"
        }}>
          <span>✅ Melhor preço garantido</span>
          <span>✅ Cancelamento grátis</span>
          <span>✅ Suporte 24h</span>
        </div>
      </div>
    </div>
  );
}
