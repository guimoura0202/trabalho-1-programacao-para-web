import React, { useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CarrinhoPage from './pages/CarrinhoPage.jsx';
import ProdutoDetalhes from './pages/ProdutoDetalhes.jsx';

function AppContent() {
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    if (produtoExistente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter((item) => item.id !== produtoId));
  };

  const aumentarQuantidade = (produtoId) => {
    setCarrinho(
      carrinho.map((item) =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuirQuantidade = (produtoId) => {
    const item = carrinho.find((item) => item.id === produtoId);
    if (item.quantidade === 1) {
      removerDoCarrinho(produtoId);
    } else {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    }
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  const calcularTotalItens = () => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary justify-content-center">
        <button
          className="btn btn-link text-white d-flex align-items-center gap-2 fs-1 fw-semibold text-decoration-none"
          onClick={() => navigate('/')}
        >
          Minha Papelaria
        </button>
      </nav>

      <div className="bg-secondary-subtle py-2 border-bottom">
        <div className="container d-flex align-items-center justify-content-start">
          <button
            className="btn btn-link text-primary d-flex align-items-center gap-2 fs-1 fw-semibold text-decoration-none"
            onClick={() => navigate('/carrinho')}
          >
            <FaCartArrowDown />
            <span>Carrinho ({calcularTotalItens()})</span>
          </button>
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home adicionarAoCarrinho={adicionarAoCarrinho} />} />
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
      <footer className="bg-primary text-center py-2 border-top">
        <div className="container">
          <p className="text-white fs-4">Direitos Autorais, 2025.</p>
        </div>
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
