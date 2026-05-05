import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    HouseDoor,
    Box,
    BarChart,
    Calendar,
    Bell,
    Inbox,
    Grid,
    Gear,
    Person,
} from 'react-bootstrap-icons'
import LogoutButton from './LogoutButton'

const navItems = [
    { to: '/dashboard', icon: <HouseDoor size={18} />, label: 'Dashboard' },
    { to: '/products', icon: <Box size={18} />, label: 'Products' },
    { to: '/analytics', icon: <BarChart size={18} />, label: 'Analytics' },
    { to: '/schedule', icon: <Calendar size={18} />, label: 'Schedule' },
    { to: '/notifications', icon: <Bell size={18} />, label: 'Notifications' },
    { to: '/inbox', icon: <Inbox size={18} />, label: 'Inbox' },
    { to: '/grid', icon: <Grid size={18} />, label: 'Grid' },
]

const bottomItems = [
    { to: '/settings', icon: <Gear size={18} />, label: 'Settings' },
    { to: '/profile', icon: <Person size={18} />, label: 'Profile' },
]

function Sidebar({ forceExpanded = false }) {
    const [hovered, setHovered] = useState(false)
    const expanded = forceExpanded || hovered

    const renderItem = (item) => (
        <NavLink
            key={item.to}
            to={item.to}
            style={{
                height: 40,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                margin: '2px 8px',
            }}
        >
            {({ isActive }) => (
                <div
                    className="d-flex align-items-center"
                    style={{
                        backgroundColor: isActive ? '#212529' : 'transparent',
                        borderRadius: 8,
                        paddingInline: 8,
                        height: 36,
                        width: '100%',
                    }}
                >
                    <span
                        style={{
                            width: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: isActive ? 'white' : '#6c757d',
                        }}
                    >
                        {item.icon}
                    </span>
                    {expanded && (
                        <span
                            className="small fw-medium ms-2"
                            style={{ color: isActive ? 'white' : '#6c757d' }}
                        >
                            {item.label}
                        </span>
                    )}
                </div>
            )}
        </NavLink>
    )

    return (
        <div
            className="d-flex flex-column py-3"
            style={{
                width: expanded ? 180 : 56,
                minHeight: '100%',
                transition: 'width 0.2s ease',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, #F1F3F5, #E8F0FE)',
                borderRight: '1px solid #dee2e6',
                zIndex: 1050,
                position: 'relative',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="d-flex flex-column gap-1 flex-grow-1">
                {navItems.map(renderItem)}
            </div>
            <div className="px-2 pt-2" style={{ borderTop: '1px solid #dee2e6' }}>
                <LogoutButton />
            </div>
            <div className="d-flex flex-column gap-1">
                {bottomItems.map(renderItem)}
            </div>
        </div>
    )
}

export default Sidebar