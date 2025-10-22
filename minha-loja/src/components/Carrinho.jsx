import React from 'react';

function Carrinho({ carrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade, limparCarrinho, calcularTotal, calcularTotalItens }) {
  return (
    <section className="cart">
      <h2>Carrinho</h2>
      <div className="cart-summary">
        <p><strong>Itens: {calcularTotalItens()}</strong></p>
        <p><strong>Total: R$ {calcularTotal().toFixed(2)}</strong></p>
      </div>
      <div className="cart-items">
        {carrinho.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            Carrinho vazio
          </p>
        ) : (
          carrinho.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.imagem} alt={item.nome} />
              </div>
              <div className="cart-item-info">
                <p className="cart-item-name">{item.nome}</p>
                <p className="cart-item-price">R$ {item.preco.toFixed(2)}</p>
                <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                  Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button 
                  onClick={() => aumentarQuantidade(item.id)}
                  style={{
                    width: '35px',
                    height: '35px',
                    cursor: 'pointer',
                    backgroundColor: '#27ae60',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
                >
                  +
                </button>
                <span style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  minWidth: '25px',
                  textAlign: 'center'
                }}>
                  {item.quantidade}
                </span>
                <button 
                  onClick={() => diminuirQuantidade(item.id)}
                  style={{
                    width: '35px',
                    height: '35px',
                    cursor: 'pointer',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                >
                  -
                </button>
                <button 
                  className="btn-excluir"
                  onClick={() => removerDoCarrinho(item.id)}
                  style={{
                    marginLeft: '8px'
                  }}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {carrinho.length > 0 && (
        <button className="clear-cart-btn" onClick={limparCarrinho}>
          Limpar
        </button>
      )}
    </section>
  );
}

export default Carrinho;