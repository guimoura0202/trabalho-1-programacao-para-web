import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container mb-5 pb-5">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-md-6 text-center">
          <div className="mb-4">
            <FaExclamationTriangle className="text-warning" style={{ fontSize: '120px' }} />
          </div>

          <h1 className="display-1 fw-bold text-primary mb-3">404</h1>

          <h2 className="mb-4">Página Não Encontrada</h2>

          <p className="lead text-muted mb-5">
            Desculpe, a página que você está procurando não existe.
          </p>

          <button
            onClick={() => navigate('/')}
            className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-4 mx-auto"
          >
            <FaHome /> Voltar para Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
