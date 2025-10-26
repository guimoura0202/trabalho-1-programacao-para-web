import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

function CompraSucesso() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-4">
      <div className="text-start mb-3">
        <button
          onClick={() => navigate('/')}
          className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
        >
          <FaArrowCircleLeft />
          Voltar
        </button>
      </div>

      <h1 className="text-success fw-bold mt-4">Itens comprados com sucesso!</h1>
    </div>
  );
}

export default CompraSucesso;
