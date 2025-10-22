import React from 'react';
import Carrinho from '../components/Carrinho';

function CarrinhoPage({ carrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho, calcularTotal, calcularTotalItens }) {
  return (
    <div>
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

