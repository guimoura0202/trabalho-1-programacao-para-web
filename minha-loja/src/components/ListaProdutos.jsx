import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import produtos from '../data/produtos.json';

function ListaProdutos({ adicionarAoCarrinho }) {
  const navigate = useNavigate();

  return (
    <section className="product-list">
      <h2>Lista de Produtos</h2>
      <div className="products-container">
        {produtos.map((produto) => (
          <div key={produto.id} className="product-card">
            <div 
              className="product-image-placeholder"
              onClick={() => navigate(`/produto/${produto.id}`)}
              style={{ cursor: 'pointer' }}
            >
              {produto.imagem ? (
                <img src={produto.imagem} alt={produto.nome} />
              ) : (
                produto.nome
              )}
            </div>
            <h3 
              onClick={() => navigate(`/produto/${produto.id}`)}
              style={{ cursor: 'pointer' }}
            >
              {produto.nome}
            </h3>
            <div className="rating-container">
              <Rating
                initialRating={produto.rating}
                readonly
                emptySymbol={<span className="star-empty">☆</span>}
                fullSymbol={<span className="star-full">★</span>}
                fractions={2}
              />
              <span className="rating-count">{produto.avaliacoes}</span>
            </div>
            <p className="price">R$ {produto.preco.toFixed(2)}</p>
            <button 
              className="btn-comprar"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;