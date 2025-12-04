"use client";

import { useRouter } from "next/navigation";

export default function RestaurantesHomePage() {
  const router = useRouter();

  const restaurantes = [
    {
      id: 1,
      nome: "TIO ARMENIO",
      descricao: "Restaurante com comida portuguesa e pratos executivos",
      endereco: "Av. Adjar da Silva Casé, 800 - Indianópolis, Caruaru - PE",
      imagem: "https://via.placeholder.com/300x200",
      link: "/restaurantes/tio-armenio"
    },
    {
      id: 2,
      nome: "BENTU'S RESTAURANTE",
      descricao: "Espaço que combina sabor, autenticidade e aconchego",
      endereco: "R. Bogotá, 50 - Maurício de Nassau, Caruaru - PE",
      imagem: "https://via.placeholder.com/300x200",
      link: "/restaurantes/bentus-restaurante"
    },
    {
      id: 3,
      nome: "DIAMANTE DA SERRA",
      descricao: "Comida típica e ambiente rural encantador",
      endereco: "Sitio Areça, Estr. do Murici, Caruaru - PE",
      imagem: "https://via.placeholder.com/300x200",
      link: "/restaurantes/diamante-da-serra"
    },
    {
      id: 4,
      nome: "RESTAURANTE DA MÃE BEATA",
      descricao: "Comida caseira caipira e ambiente acolhedor",
      endereco: "Parque 18 de Maio Na Area Da Feira de Caruaru",
      imagem: "https://via.placeholder.com/300x200",
      link: "/restaurantes/restaurante-da-mae-beata"
    },
    {
      id: 5,
      nome: "FERREIRO ROOFTOP",
      descricao: "Espaço sofisticado com vista deslumbrante",
      endereco: "EDF.Garagem - Av. Adjar da Silva Casé, 800 - Pavimento 7 - Indianópolis, Caruaru - PE",
      imagem: "https://via.placeholder.com/300x200",
      link: "/restaurantes/ferreiro-rooftop"
    }
  ];

  return (
    <div style={{
      margin: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0e7a89",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px"
    }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "30px"
      }}>
        <button 
          onClick={() => router.push("/")}
          style={{
            background: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: "50%",
            fontSize: "29px",
            cursor: "pointer",
            flexShrink: "0"
          }}
        >
          ←
        </button>
       
        <div style={{
          color: "black",
          background: "white",
          padding: "10px 25px",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "22px",
          fontWeight: "bold",
          flex: "1",
          justifyContent: "center",
          margin: "0 10px"
        }}>
          <div style={{
            width: "29px",
            height: "29px",
            backgroundColor: "#ddd",
            borderRadius: "4px"
          }}></div>
          <span>restaurantes</span>
        </div>
      </header>

      {/* LISTA DE RESTAURANTES */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        {restaurantes.map((rest) => (
          <div 
            key={rest.id}
            onClick={() => router.push(rest.link)}
            style={{
              background: "#ffffff22",
              padding: "20px",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#ffffff33"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#ffffff22"}
          >
            <h3 style={{
              margin: "0 0 10px",
              fontSize: "20px",
              textTransform: "uppercase"
            }}>
              {rest.nome}
            </h3>
            
            <div style={{
              display: "flex",
              gap: "20px",
              alignItems: "center"
            }}>
              <div style={{
                width: "150px",
                height: "100px",
                backgroundColor: "#005f6d",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                flexShrink: "0"
              }}>
                IMAGEM
              </div>
              
              <div style={{ flex: "1" }}>
                <p style={{
                  margin: "0 0 10px",
                  fontSize: "16px",
                  lineHeight: "1.5"
                }}>
                  {rest.descricao}
                </p>
                <p style={{
                  margin: "0",
                  fontSize: "14px",
                  opacity: "0.9"
                }}>
                  <strong>📍 Endereço:</strong> {rest.endereco}
                </p>
              </div>
            </div>
            
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "15px"
            }}>
              <button style={{
                padding: "10px 20px",
                background: "#0095FF",
                border: "none",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold"
              }}>
                Ver Detalhes →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
