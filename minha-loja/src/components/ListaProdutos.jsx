import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import produtos from '../data/produtos.json';

function ListaProdutos({ adicionarAoCarrinho }) {
  const navigate = useNavigate();

  return (
    <section className="my-4">
      <h2 className="fw-bold mb-4 text-dark">Lista de Produtos</h2>

      <div className="row g-1">
        {produtos.map((produto) => (
          <div key={produto.id} className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 shadow-sm">
              <div
                className="bg-dark text-white d-flex align-items-center justify-content-center"
                onClick={() => navigate(`/produto/${produto.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {produto.imagem ? (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                ) : (
                  <span className="fw-semibold text-center">{produto.nome}</span>
                )}
              </div>
              <div className="card-body text-center">
                <h6
                  className="fw-semibold text-dark mb-2"
                  onClick={() => navigate(`/produto/${produto.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {produto.nome}
                </h6>

                <div className="d-flex justify-content-center align-items-center mb-2">
                  <Rating
                    initialRating={produto.rating}
                    readonly
                    emptySymbol={<span className="text-secondary">☆</span>}
                    fullSymbol={<span className="text-warning">★</span>}
                    fractions={2}
                  />
                  <span className="ms-1 text-muted small">{produto.avaliacoes}</span>
                </div>

                <p className="fw-semibold text-dark mb-3">R$ {produto.preco.toFixed(2)}</p>

                <button
                  className="btn btn-outline-success btn-sm w-100 fw-semibold"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;
