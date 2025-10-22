import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carrinho from '../components/Carrinho';

function CarrinhoPage({ carrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho, calcularTotal, calcularTotalItens }) {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ padding: '10px 20px' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '4px 10px',
            fontSize: '13px',
            cursor: 'pointer',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
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

