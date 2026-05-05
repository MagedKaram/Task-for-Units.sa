import { useState } from 'react'
import { Bell, Chat, ArrowsFullscreen, ChevronDown, List } from 'react-bootstrap-icons'
import Logo from './Logo'

function AppNavbar({ onMenuClick }) {
    const [showLangMenu, setShowLangMenu] = useState(false)

    return (
        <div
            className="border-bottom pe-4 ps-2 py-2 d-flex align-items-center justify-content-between w-100"
            style={{ backgroundColor: '#F1F3F5' }}
        >

            {/* Left */}
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-sm d-md-none" onClick={onMenuClick}>
                    <List size={20} />
                </button>
                <Logo />
            </div>

            {/* Right */}
            <div className="d-flex align-items-center gap-3">

                {/* Desktop only */}
                <div className="d-none d-md-flex align-items-center gap-3">

                    {/* Language Dropdown */}
                    <div className="position-relative">
                        <div
                            className="d-flex align-items-center gap-1 bg-white rounded-pill px-3 py-1 fw-bold small"
                            style={{ cursor: 'pointer', border: '1px solid #dee2e6' }}
                            onClick={() => setShowLangMenu(!showLangMenu)}
                        >
                            <span>EN</span>
                            <ChevronDown size={12} />
                        </div>
                        {showLangMenu && (
                            <div
                                className="position-absolute bg-white border rounded shadow-sm py-1"
                                style={{ top: '110%', right: 0, minWidth: 80, zIndex: 999 }}
                            >
                                <div
                                    className="px-3 py-1 small fw-bold"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowLangMenu(false)}
                                >
                                    EN
                                </div>
                                <div
                                    className="px-3 py-1 small fw-bold"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowLangMenu(false)}
                                >
                                    AR
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Fullscreen */}
                    <div
                        className="d-flex align-items-center justify-content-center rounded-circle bg-white"
                        style={{ width: 34, height: 34, cursor: 'pointer', border: '1px solid #dee2e6' }}
                    >
                        <ArrowsFullscreen size={15} className="text-secondary" />
                    </div>

                    {/* Chat */}
                    <div
                        className="position-relative d-flex align-items-center justify-content-center rounded-circle bg-white"
                        style={{ width: 34, height: 34, cursor: 'pointer', border: '1px solid #dee2e6' }}
                    >
                        <Chat size={15} className="text-secondary" />
                        <span
                            className="position-absolute bg-primary rounded-circle border border-white"
                            style={{ width: 8, height: 8, top: 2, right: 2 }}
                        />
                    </div>

                    {/* Bell */}
                    <div
                        className="position-relative d-flex align-items-center justify-content-center rounded-circle bg-white"
                        style={{ width: 34, height: 34, cursor: 'pointer', border: '1px solid #dee2e6' }}
                    >
                        <Bell size={15} className="text-secondary" />
                        <span
                            className="position-absolute bg-primary rounded-circle border border-white"
                            style={{ width: 8, height: 8, top: 2, right: 2 }}
                        />
                    </div>

                </div>

                {/* Avatar */}
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: 34, height: 34, cursor: 'pointer', objectFit: 'cover', border: '1px solid #dee2e6' }}
                />

            </div>
        </div>
    )
}

export default AppNavbar