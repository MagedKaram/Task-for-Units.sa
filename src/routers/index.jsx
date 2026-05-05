import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from '../components/shared/ProtectedRoute'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Navigate to="/dashboard" replace /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'products', element: <ProductList /> },
            { path: 'products/:id', element: <ProductDetails /> },
            { path: '*', element: <NotFound /> }
        ],
    },
])

export default router;