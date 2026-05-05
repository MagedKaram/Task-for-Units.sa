import { Search, Calendar, Download, List } from 'react-bootstrap-icons'
import { useSearchShortcut } from '../../hooks/useSearchShortcut'


function DashboardHeader() {
    const searchRef = useSearchShortcut();

    return (
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">

            {/* Left */}
            <div>
                <h4 className="fw-bold mb-1">Welcome Back Ameerah Howard</h4>
                <p className="small mb-0" style={{ color: '#6c757d' }}>
                    You have <span className="text-primary fw-medium">2 unread</span> notifications
                </p>
            </div>

            {/* Right */}
            <div className="d-flex align-items-center gap-2 flex-wrap">

                {/* Search */}
                <div
                    className="d-flex align-items-center gap-2 bg-white px-3"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 24, height: 38, minWidth: 200 }}
                >
                    <Search size={13} className="text-muted" />
                    <input
                        type="text"
                        className="border-0 small w-100"
                        placeholder="Search..."
                        style={{ outline: 'none', background: 'transparent' }}
                        ref={searchRef}
                    />
                    <span className="small text-muted" style={{ fontSize: 11 }}>⌘+K</span>
                </div>

                {/* Date */}
                <button
                    className="bg-white d-flex align-items-center gap-2 px-3"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 24, height: 38, fontSize: 13 }}
                >
                    <span>Date</span>
                    <Calendar size={13} />
                </button>

                {/* Export */}
                <button
                    className="bg-white d-flex align-items-center gap-2 px-3"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 24, height: 38, fontSize: 13 }}
                >
                    <span>Export Document</span>
                    <Download size={13} />
                </button>

                {/* Menu */}
                <button
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{ border: '1px solid #E5E7EB', borderRadius: '50%', width: 38, height: 38 }}
                >
                    <List size={16} />
                </button>

            </div>
        </div>
    )
}

export default DashboardHeader