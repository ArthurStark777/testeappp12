"use client";

import { useRouter } from "next/navigation";

export default function CitiHotelResidencePage() {
  const router = useRouter();

  return (
    <div style={{
      background: "#0e7a89",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      color: "#fff"
    }}>
      {/* HEADER */}
      <header style={{
        margin: "20px",
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        <button 
          onClick={() => router.push("/hoteis")}
          style={{
            background: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: "50%",
            fontSize: "29px",
            cursor: "pointer"
          }}
        >
          
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
          flex: 1
        }}>
          <div style={{ width: "29px", height: "29px", backgroundColor: "#ddd", borderRadius: "4px" }}></div>
          <span>hoteis</span>
        </div>
      </header>

      {/* BARRA DE BUSCA */}
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

      {/* FILTROS */}
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

      {/* CONTEÚDO DO HOTEL */}
      <section style={{
        padding: "20px"
      }}>
        <div style={{
          background: "#ffffff22",
          padding: "20px",
          borderRadius: "12px"
        }}>
          {/* NOME DO HOTEL */}
          <h2 style={{
            margin: "0 0 15px",
            fontSize: "28px",
            textTransform: "uppercase"
          }}>
            CITI HOTEL RESIDENCE CARUARU
          </h2>

          {/* GALERIA DE IMAGENS */}
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
                fontSize: "20px"
              }}>
                IMAGEM {num}
              </div>
            ))}
          </div>

          {/* DESCRIÇÃO */}
          <p style={{
            marginBottom: "15px",
            lineHeight: "1.6",
            fontSize: "16px"
          }}>
            Oferece acomodações que incluem uma piscina ao ar livre e uma academia moderna e dispõe de WiFi e estacionamento gratuito.
          </p>

          {/* ENTRADA A PARTIR */}
          <p style={{
            marginBottom: "15px",
            fontSize: "16px"
          }}>
            <strong>Entrada a Partir: 8:00</strong>
          </p>

          {/* INFORMAÇÕES DE CONTATO */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px"
          }}>
            <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
              <strong>MEIOS DE CONTATO</strong>
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Endereço:</strong> Av. Procurador Pedro Jorge, 92 Caruaru
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>Telefone:</strong> +55(81)37215883
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>ENTRADA A PARTIR DE:</strong> 14:00
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>
              <strong>SAÍDA ATÉ:</strong> 12:00
            </p>
          </div>

          {/* COMODIDADES */}
          <div style={{
            marginTop: "20px"
          }}>
            <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>COMODIDADES:</h3>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}>
              {["Wi-Fi grátis", "Estacionamento grátis", "Piscina", "Academia", "Ar-condicionado", "TV a cabo"].map((comodidade, index) => (
                <span key={index} style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  fontSize: "14px"
                }}>
                   {comodidade}
                </span>
              ))}
            </div>
          </div>

          {/* BOTÕES DE AÇÃO */}
          <div style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px"
          }}>
            <button 
              onClick={() => router.push("/hoteis")}
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
              Voltar para Hotéis
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
              Reservar Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
