"use client";

import { useState, useEffect } from "react";

export default function Carrossel({ imagens = [], altText = "Foto do bar" }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Validar imagens
  const imagensValidas = Array.isArray(imagens) ? imagens.filter(img => img) : [];

  const proximaImagem = () => {
    if (imagensValidas.length <= 1) return;
    setIndiceAtual((prev) => (prev + 1) % imagensValidas.length);
  };

  const imagemAnterior = () => {
    if (imagensValidas.length <= 1) return;
    setIndiceAtual((prev) => (prev - 1 + imagensValidas.length) % imagensValidas.length);
  };

  const vaiParaImagem = (index) => {
    setIndiceAtual(index);
  };

  useEffect(() => {
    if (!autoPlay || imagensValidas.length <= 1) return;
    
    const intervalo = setInterval(() => {
      proximaImagem();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [autoPlay, imagensValidas.length]);

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
    },
    imagemContainer: {
      width: "100%",
      height: "300px",
      position: "relative",
      overflow: "hidden"
    },
    imagem: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    },
    botaoAnterior: {
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.9)",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "20px",
      cursor: "pointer",
      color: "#007A8D",
      zIndex: 10
    },
    botaoProximo: {
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.9)",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "20px",
      cursor: "pointer",
      color: "#007A8D",
      zIndex: 10
    },
    indicadores: {
      position: "absolute",
      bottom: "15px",
      left: "0",
      right: "0",
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      zIndex: 10
    },
    contador: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.6)",
      color: "white",
      padding: "4px 8px",
      borderRadius: "10px",
      fontSize: "12px",
      zIndex: 10
    },
    placeholder: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#333",
      color: "white",
      fontSize: "16px",
      flexDirection: "column"
    }
  };

  // Se não há imagens
  if (imagensValidas.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.imagemContainer}>
          <div style={styles.placeholder}>
            <div style={{fontSize: "48px", marginBottom: "10px"}}>📷</div>
            <div>Sem fotos disponíveis</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.imagemContainer}>
        <img 
          src={imagensValidas[indiceAtual]} 
          alt={`${altText} - Foto ${indiceAtual + 1}`}
          style={styles.imagem}
          onError={(e) => {
            console.log("Erro ao carregar:", imagensValidas[indiceAtual]);
            e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";
          }}
        />
        
        {imagensValidas.length > 1 && (
          <>
            <button 
              style={styles.botaoAnterior}
              onClick={imagemAnterior}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              title="Foto anterior"
            >
              ◀
            </button>
            
            <button 
              style={styles.botaoProximo}
              onClick={proximaImagem}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              title="Próxima foto"
            >
              ▶
            </button>

            <div style={styles.contador}>
              {indiceAtual + 1} / {imagensValidas.length}
            </div>

            <div style={styles.indicadores}>
              {imagensValidas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => vaiParaImagem(index)}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: index === indiceAtual ? "#00FFAA" : "rgba(255,255,255,0.5)",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                  title={`Ir para foto ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
