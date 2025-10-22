import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carrinho from '../components/Carrinho';

function CarrinhoPage({ carrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho, calcularTotal, calcularTotalItens }) {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ padding: '15px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            cursor: 'pointer',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'normal'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          Voltar
        </button>
      </div>
      <Carrinho 
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
        aumentarQuantidade={aumentarQuantidade}
        diminuirQuantidade={diminuirQuantidade}
        limparCarrinho={limparCarrinho}
        calcularTotal={calcularTotal}
        calcularTotalItens={calcularTotalItens}
      />
    </div>
  );
}

export default CarrinhoPage;

