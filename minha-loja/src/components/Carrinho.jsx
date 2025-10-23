import React from 'react';
import { FaBackspace, FaMinus, FaPlus } from 'react-icons/fa';

function Carrinho({ carrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho, calcularTotal, calcularTotalItens }) {
  return (
    <section className="bg-ligth p-4 rounded shadow-sm">
      {carrinho.length === 0 ? (
        <div className="alert alert-secondary fs-4">
          Carrinho vazio
        </div>
      ) : (
        <>
          <div className="bg-secondary-subtle p-3 rounded mb-4">
            <p className="mb-1 fw-semibold fs-4">
              Itens: {calcularTotalItens()}
            </p>
            <p className="mb-0 fw-semibold fs-4">
              Total: R$ {calcularTotal().toFixed(2)}
            </p>

          {carrinho.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between bg-white p-3 rounded mb-3 border"
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="bg-dark d-flex align-items-center justify-content-center rounded overflow-hidden"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>

                <div>
                  <p className="fw-semibold mb-1 text-primary">{item.nome}</p>
                  <p className="mb-0 fw-semibold">
                    R$ {item.preco.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => aumentarQuantidade(item.id)}
                  className="btn btn-outline-success rounded-circle"
                >
                  <FaPlus />
                </button>

                <span className="fw-bold">{item.quantidade}</span>

                <button
                  onClick={() => diminuirQuantidade(item.id)}
                  className="btn btn-outline-danger rounded-circle"
                >
                  <FaMinus />
                </button>

                <button
                  className="btn btn-danger d-flex align-items-center gap-2"
                  onClick={() => removerDoCarrinho(item.id)}
                >
                  <FaBackspace /> Excluir
                </button>
              </div>
            </div>
          ))}
          </div>

          {carrinho.length > 0 && (
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-danger px-4 fw-semibold"
                onClick={limparCarrinho}
              >
                Limpar
              </button>
              <button className="btn btn-success px-4 fw-semibold">
                Finalizar Compra
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Carrinho;