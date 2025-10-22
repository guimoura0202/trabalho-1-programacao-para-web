import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import CarrinhoPage from './pages/CarrinhoPage.jsx';
import ProdutoDetalhes from './pages/ProdutoDetalhes.jsx';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    
    if (produtoExistente) {
      setCarrinho(carrinho.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter(item => item.id !== produtoId));
  };

  const aumentarQuantidade = (produtoId) => {
    setCarrinho(carrinho.map(item =>
      item.id === produtoId
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    ));
  };

  const diminuirQuantidade = (produtoId) => {
    const item = carrinho.find(item => item.id === produtoId);
    if (item.quantidade === 1) {
      removerDoCarrinho(produtoId);
    } else {
      setCarrinho(carrinho.map(item =>
        item.id === produtoId
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      ));
    }
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  const calcularTotalItens = () => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Minha Papelaria</h1>
          <nav style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            marginTop: '15px',
            paddingBottom: '15px'
          }}>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              color: '#333', 
              fontSize: '18px',
              padding: '8px 16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px',
              transition: 'background-color 0.3s'
            }}>
              Home
            </Link>
            <Link to="/carrinho" style={{ 
              textDecoration: 'none', 
              color: '#333', 
              fontSize: '18px',
              padding: '8px 16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
              position: 'relative'
            }}>
              Carrinho {carrinho.length > 0 && (
                <span style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  marginLeft: '5px'
                }}>
                  {calcularTotalItens()}
                </span>
              )}
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home adicionarAoCarrinho={adicionarAoCarrinho} />} 
            />
            <Route 
              path="/carrinho" 
              element={
                <CarrinhoPage 
                  carrinho={carrinho}
                  removerDoCarrinho={removerDoCarrinho}
                  aumentarQuantidade={aumentarQuantidade}
                  diminuirQuantidade={diminuirQuantidade}
                  limparCarrinho={limparCarrinho}
                  calcularTotal={calcularTotal}
                  calcularTotalItens={calcularTotalItens}
                />
              } 
            />
            <Route 
              path="/produto/:id" 
              element={<ProdutoDetalhes adicionarAoCarrinho={adicionarAoCarrinho} />} 
            />
          </Routes>
        </main>
        <footer>
          <p>Direitos Autorais, 2025.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;