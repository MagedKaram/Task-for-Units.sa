import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import AppNavbar from '../components/shared/Navbar'

function MainLayout() {
    const [mobileExpanded, setMobileExpanded] = useState(false)

    return (
        <div
            className="d-flex flex-column"
            style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #F1F3F5, #E8F0FE)' }}
        >
            <AppNavbar onMenuClick={() => setMobileExpanded(!mobileExpanded)} />

            <div className="d-flex flex-grow-1 position-relative">

                {/* Desktop Sidebar */}
                <div className="d-none d-md-flex">
                    <Sidebar />
                </div>

                {/* Mobile Sidebar  */}
                <div className="d-flex d-md-none" style={{ zIndex: 1050 }}>
                    <Sidebar forceExpanded={mobileExpanded} />
                </div>

                {/* Blur Overlay */}
                {mobileExpanded && (
                    <div
                        className="position-fixed w-100 d-md-none"
                        style={{
                            zIndex: 1040,
                            backdropFilter: 'blur(4px)',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            top: 52, // 
                            bottom: 0,
                            left: 0,
                        }}
                        onClick={() => setMobileExpanded(false)}
                    />
                )}

                {/* Content */}
                <main className="flex-grow-1 p-4">
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default MainLayout