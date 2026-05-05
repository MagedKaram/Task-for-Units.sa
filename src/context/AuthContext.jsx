import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const getInitialUser = () => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
}

const getInitialToken = () => {
    return localStorage.getItem('token') || null
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(getInitialUser)
    const [token, setToken] = useState(getInitialToken)

    const login = (userData, accessToken) => {
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', accessToken)
        setUser(userData)
        setToken(accessToken)
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}