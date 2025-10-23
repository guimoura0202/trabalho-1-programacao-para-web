import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import produtos from '../data/produtos.json';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function ProdutoDetalhes({ adicionarAoCarrinho }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find(p => p.id === parseInt(id));

  if (!produto) {
    return (
      <div className="text-center py-5">
        <h2>Produto não encontrado</h2>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary mt-3 px-4"
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <button
        onClick={() => navigate('/')}
        className="btn btn-link text-primary d-flex align-items-center gap-2 mb-5 text-decoration-none"
      >
        <FaArrowAltCircleLeft /> Voltar
      </button>

      <div className="row bg-white rounded shadow-sm p-4 g-4">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {produto.imagem ? (
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="img-fluid rounded object-fit-contain"
            />
          ) : (
            <div className="bg-dark text-white d-flex align-items-center justify-content-center w-100 rounded ratio ratio-1x1">
              {produto.nome}
            </div>
          )}
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-2">
            {produto.nome}
          </h2>

          <div className="d-flex align-items-center gap-2 mb-3">
            <Rating
              initialRating={produto.rating}
              readonly
              emptySymbol={<span className="text-secondary fs-4">☆</span>}
              fullSymbol={<span className="text-warning fs-4">★</span>}
              fractions={2}
            />
            <span className="fw-semibold text-secondary">
              ({produto.avaliacoes} avaliações)
            </span>
          </div>

          <div className="border rounded p-3 bg-light mb-4">
            <p className="fw-semibold mb-2">Descrição:</p>
            <p className="text-muted mb-0" style={{ textAlign: "justify" }}>
              {produto.descricao}
            </p>
          </div>

          <h3 className="text-success text-center fw-bold mb-4">
            R$ {produto.preco.toFixed(2)}
          </h3>

          <button
            onClick={() => {
              adicionarAoCarrinho(produto);
              alert('Produto adicionado ao carrinho!');
            }}
            className="btn btn-success d-flex align-items-center justify-content-center gap-2 w-100 py-2 fs-4"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhes;

