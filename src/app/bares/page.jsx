"use client";

import { useRouter } from "next/navigation";

export default function BaresPage() {
  const router = useRouter();
  const bares = [
    { 
      id: "boteco-do-keka", 
      nome: "Boteco do Keka Prime", 
      avaliacao: "⭐ 4.5 Muito bom", 
      preco: "R$ 40 - 60",
      beneficios: ["Música ao vivo", "Aceita reservas"]
    },
    { 
      id: "seu-ze-lounge", 
      nome: "Seu Zé lounge", 
      avaliacao: "⭐ 4.6 Excelente", 
      preco: "R$ 40 - 60",
      beneficios: ["Organiza eventos", "Ótimos drinks"]
    },
    { 
      id: "metal-beer", 
      nome: "Metal Beer", 
      avaliacao: "⭐ 4.7 Excelente", 
      preco: "R$ 30 - 50",
      beneficios: ["Tem música ao vivo", "Serve ótimos coquetéis"]
    },
    { 
      id: "petiscaria-do-titio", 
      nome: "Petiscaria do titio", 
      avaliacao: "⭐ 4.5 Muito bom", 
      preco: "R$ 40 - 60",
      beneficios: ["Cardápio variado", "Tem mesas externas"]
    },
    { 
      id: "fulano-de-tal", 
      nome: "Fulano de Tal", 
      avaliacao: "⭐ 4.5 Muito bom", 
      preco: "R$ 40 - 70",
      beneficios: ["Organiza eventos", "Música ao vivo"]
    },
  ];

  return (
    <div style={{
      background: '#007A8D',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      paddingBottom: '50px'
    }}>
      {/* HEADER */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        gap: '20px'
      }}>
        <button 
          onClick={() => router.push('/')}
          style={{
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '10px 15px',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#007A8D'
          }}
        >
          ←
        </button>
        <div style={{
          background: 'white',
          padding: '10px 25px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#007A8D'
        }}>
          <span>🍻</span>
          <span>Bares</span>
        </div>
      </div>

      {/* CARDS */}
      <div style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '25px'
      }}>
        {bares.map((bar) => (
          <div key={bar.id} style={{
            background: 'white',
            borderRadius: '14px',
            padding: '15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            transition: 'transform 0.15s',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* IMAGEM */}
            <div style={{
              height: '150px',
              background: '#005f6d',
              borderRadius: '12px',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              textAlign: 'center',
              padding: '10px'
            }}>
              {bar.nome}
            </div>
            
            {/* NOME */}
            <h3 style={{ 
              margin: '10px 0 5px', 
              fontSize: '18px', 
              color: '#222',
              fontWeight: 'bold'
            }}>
              {bar.nome}
            </h3>
            
            {/* AVALIAÇÃO */}
            <p style={{ 
              fontSize: '14px', 
              color: '#1e8e3e', 
              margin: '3px 0',
              fontWeight: 'bold'
            }}>
              {bar.avaliacao}
            </p>
            
            {/* PREÇO */}
            <p style={{ 
              fontSize: '16px', 
              margin: '8px 0 0',
              color: '#007A8D',
              fontWeight: 'bold'
            }}>
              R$ <strong>{bar.preco.split('R$ ')[1]}</strong>
            </p>
            
            {/* BENEFÍCIOS */}
            <div style={{ margin: '10px 0 15px', flex: 1 }}>
              {bar.beneficios.map((beneficio, index) => (
                <p key={index} style={{
                  fontSize: '13px',
                  color: '#559a35',
                  margin: '4px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <span style={{ fontSize: '16px' }}>✓</span> {beneficio}
                </p>
              ))}
            </div>
            
            {/* BOTÃO - Agora com as novas URLs */}
            <button 
              onClick={() => router.push(`/bares/${bar.id}`)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: '#0095FF',
                color: 'white',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: 'auto'
              }}
            >
              Ver ofertas »
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
