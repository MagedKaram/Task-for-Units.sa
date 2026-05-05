import { Container, Row, Col, Card } from 'react-bootstrap'
import Logo from '../components/shared/Logo'
import LoginForm from '../components/login/LoginForm'

function Login() {
    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={10} md={6} lg={4}>
                    <Card className="border-0 shadow-sm p-4">
                        <Card.Body>
                            <Logo />
                            <h5 className="fw-bold mb-1 mt-5">Welcome back 👋</h5>
                            <p className="text-muted small mb-4">Sign in to your account to continue</p>
                            <LoginForm />
                            <p className="text-center small text-muted mt-4 mb-0">
                                Hint: admin@sugarpanel.com / password : 123456
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login