import { useNavigate } from 'react-router-dom'
import { BoxArrowRight } from 'react-bootstrap-icons'
import { useAuth } from '../../hooks/useAuth'

function LogoutButton() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <button
            onClick={handleLogout}
            className="d-flex align-items-center gap-2 text-danger px-2 py-1"
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 13,
            }}
        >
            <BoxArrowRight size={16} />
            Logout
        </button>
    )
}

export default LogoutButton