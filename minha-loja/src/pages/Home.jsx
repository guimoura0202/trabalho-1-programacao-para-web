import React from 'react';
import ListaProdutos from '../components/ListaProdutos';

function Home({ adicionarAoCarrinho }) {
  return (
    <div>
      <ListaProdutos adicionarAoCarrinho={adicionarAoCarrinho} />
    </div>
  );
}

export default Home;
