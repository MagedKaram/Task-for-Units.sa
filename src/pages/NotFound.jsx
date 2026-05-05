import { useNavigate } from 'react-router-dom'
import { HouseDoor } from 'react-bootstrap-icons'

function NotFound() {
    const navigate = useNavigate()

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{ background: 'linear-gradient(to bottom, #F1F3F5, #E8F0FE)' }}
        >
            <div className="text-center">
                <h1 className="fw-bold" style={{ fontSize: 80, color: '#283648', lineHeight: 1 }}>
                    404
                </h1>
                <h4 className="fw-bold mb-2">Page not found</h4>
                <p className="text-muted small mb-4">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button
                    className="btn btn-dark d-inline-flex align-items-center gap-2 px-4"
                    style={{ borderRadius: 24 }}
                    onClick={() => navigate('/dashboard')}
                >
                    <HouseDoor size={16} /> Back to Dashboard
                </button>
            </div>
        </div>
    )
}

export default NotFound