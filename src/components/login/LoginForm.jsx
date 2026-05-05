import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { login as loginApi } from '../../api/services'
import { useAuth } from '../../hooks/useAuth'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await loginApi({ email, password })
            login(res.data.user, res.data.accessToken)
            navigate('/dashboard')
        } catch {
            setError('Invalid email or password')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="small fw-medium">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="admin@sugarpanel.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="small fw-medium">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="dark" className="w-100" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                </Button>
            </Form>
        </>
    )
}

export default LoginForm