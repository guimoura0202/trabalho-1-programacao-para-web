import React, { useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import CarrinhoPage from './pages/CarrinhoPage.jsx';
import ProdutoDetalhes from './pages/ProdutoDetalhes.jsx';

function AppContent() {
  const navigate = useNavigate();
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
    <div className="app">
      <header>
        <h1>Minha Papelaria</h1>
      </header>
      <div style={{
        backgroundColor: '#e0e0e0',
        padding: '15px 20px',
        borderBottom: '2px solid #ccc'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2874A6',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/carrinho')}
        >
          <FaCartArrowDown />
          <span>Carrinho ({calcularTotalItens()})</span>
        </div>
      </div>
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;