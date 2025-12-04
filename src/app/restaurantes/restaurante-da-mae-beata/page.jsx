"use client";

import { useRouter } from "next/navigation";

export default function MaeBeataPage() {
  const router = useRouter();

  return (
    <div style={{
      margin: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0e7a89",
      color: "#fff",
      minHeight: "100vh"
    }}>
      <header style={{
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px"
      }}>
        <button 
          onClick={() => router.push("/restaurantes")}
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

      <div style={{
        background: "white",
        margin: "0 20px",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        gap: "10px"
      }}>
        <input 
          type="text" 
          placeholder="destino"
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#f5f5f5"
          }}
        />
        <input 
          type="date" 
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#f5f5f5"
          }}
        />
        <input 
          type="date" 
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#f5f5f5"
          }}
        />
        <button style={{
          padding: "10px 20px",
          background: "#0095FF",
          border: "none",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer"
        }}>
          Buscar
        </button>
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "15px",
        gap: "8px",
        padding: "0 20px"
      }}>
        <button style={{
          padding: "8px 14px",
          background: "#0c8d9d",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer"
        }}>
          Visão Geral
        </button>
        <button style={{
          padding: "8px 14px",
          background: "#0c8d9d",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer"
        }}>
          Informações e Preços
        </button>
        <button style={{
          padding: "8px 14px",
          background: "#0c8d9d",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer"
        }}>
          Comodidades
        </button>
        <button style={{
          padding: "8px 14px",
          background: "#0c8d9d",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer"
        }}>
          Informações Importantes
        </button>
      </div>

      <section style={{
        padding: "20px"
      }}>
        <div style={{
          background: "#ffffff22",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <h2 style={{
            margin: "0 0 15px",
            fontSize: "24px",
            textTransform: "uppercase"
          }}>
            RESTAURANTE DA MÃE BEATA
          </h2>

          <div style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            marginBottom: "20px",
            paddingBottom: "10px"
          }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} style={{
                minWidth: "250px",
                height: "180px",
                backgroundColor: "#005f6d",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px"
              }}>
                IMAGEM {num}
              </div>
            ))}
          </div>

          <p style={{
            marginBottom: "15px",
            lineHeight: "1.6",
            fontSize: "16px"
          }}>
            É conhecido por sua comida caseira caipira, oferecendo um ambiente acolhedor e familiar. Com uma variedade de pratos típicos da culinária nordestina, o local é ideal para quem busca uma experiência gastronômica autêntica e saborosa.
          </p>

          <div style={{
            marginBottom: "15px",
            fontSize: "16px"
          }}>
            <p style={{ margin: "5px 0" }}>
              <strong>Endereço:</strong> Parque 18 de Maio Na Area Da Feira de Caruaru
            </p>
            <p style={{ margin: "5px 0" }}>
              <strong>Telefone:</strong> +55 (81) 9 9990-3063
            </p>
          </div>

          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px"
          }}>
            <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
              <strong>HORÁRIO DE FUNCIONAMENTO</strong>
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Segunda-feira:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Terça-feira:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Quarta-feira:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Quinta-feira:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Sexta-feira:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Sábado:</strong> 11:00 - 16:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Domingo:</strong> 11:00 - 16:00
            </p>
          </div>

          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px"
          }}>
            <button 
              onClick={() => router.push("/restaurantes")}
              style={{
                flex: 1,
                padding: "15px",
                background: "#ffffff33",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Voltar para Restaurantes
            </button>
            <button 
              style={{
                flex: 1,
                padding: "15px",
                background: "#0095FF",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
