import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carrinho from '../components/Carrinho';
import { FaArrowCircleLeft } from 'react-icons/fa';

function CarrinhoPage({
  carrinho,
  removerDoCarrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  limparCarrinho,
  calcularTotal,
  calcularTotalItens,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container py-3">
        <button
          onClick={() => navigate('/')}
          className="btn btn-link text-primary d-flex align-items-center gap-2 mb-3 text-decoration-none"
        >
          <FaArrowCircleLeft /> Voltar
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
