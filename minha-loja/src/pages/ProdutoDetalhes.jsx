import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import produtos from '../data/produtos.json';

function ProdutoDetalhes({ adicionarAoCarrinho }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find(p => p.id === parseInt(id));

  if (!produto) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Produto não encontrado</h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginTop: '20px'
          }}
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px'
    }}>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      >
        Voltar
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src={produto.imagem} 
            alt={produto.nome}
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>

        <div>
          <h1 style={{ 
            fontSize: '28px', 
            marginBottom: '15px',
            color: '#2c3e50'
          }}>
            {produto.nome}
          </h1>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            marginBottom: '20px'
          }}>
            <Rating
              initialRating={produto.rating}
              readonly
              emptySymbol={<span className="star-empty">☆</span>}
              fullSymbol={<span className="star-full">★</span>}
              fractions={2}
            />
            <span style={{ color: '#7f8c8d' }}>
              ({produto.avaliacoes} avaliações)
            </span>
          </div>

          <div style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#27ae60',
            marginBottom: '25px'
          }}>
            R$ {produto.preco.toFixed(2)}
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '25px'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              marginBottom: '10px',
              color: '#2c3e50'
            }}>
              Descrição
            </h3>
            <p style={{ 
              lineHeight: '1.6',
              color: '#555',
              fontSize: '15px'
            }}>
              {produto.descricao}
            </p>
          </div>

          <button 
            onClick={() => {
              adicionarAoCarrinho(produto);
              alert('Produto adicionado ao carrinho!');
            }}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhes;

