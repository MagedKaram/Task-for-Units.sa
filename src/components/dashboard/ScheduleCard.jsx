import { useEffect, useState } from 'react'
import { Search, ChevronLeft, ChevronRight, ChevronDown } from 'react-bootstrap-icons'
import { getSchedule } from '../../api/services'

const tabs = ['Meetings', 'Events', 'Holiday']

const categoryColors = {
    'Product Design': { bg: '#DBEAFE', color: '#1E40AF' },
    'Marketing Bussiness': { bg: '#D1FAE5', color: '#065F46' },
    'Brainstorming Session': { bg: '#FEE2E2', color: '#991B1B' },
}

function ScheduleCard() {
    const [schedule, setSchedule] = useState([])
    const [activeTab, setActiveTab] = useState('Meetings')

    useEffect(() => {
        getSchedule().then((res) => setSchedule(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 d-flex flex-column"
            style={{
                borderRadius: 16,
                border: '1px solid #E5E7EB',
                width: 320,
                flexShrink: 0,
            }}
        >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold mb-0">Schedule</h6>
                <div className="d-flex align-items-center gap-2">
                    <span className="small text-muted" style={{ cursor: 'pointer' }}>See All</span>
                    <Search size={14} className="text-muted" style={{ cursor: 'pointer' }} />
                </div>
            </div>

            {/* Month selector */}
            <div
                className="d-flex justify-content-between align-items-center mb-3 px-2 py-2"
                style={{ border: '1px solid #E5E7EB', borderRadius: 20 }}
            >
                <ChevronLeft size={14} style={{ cursor: 'pointer' }} className="text-muted" />
                <span className="small fw-medium">January 2025</span>
                <ChevronRight size={14} style={{ cursor: 'pointer' }} className="text-muted" />
            </div>

            {/* Tabs */}
            <div className="d-flex border-bottom mb-3">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="text-center pb-2"
                        style={{
                            flex: 1,
                            cursor: 'pointer',
                            fontSize: 13,
                            fontWeight: activeTab === tab ? 600 : 400,
                            color: activeTab === tab ? '#1E40AF' : '#6c757d',
                            borderBottom: activeTab === tab ? '2px solid #1E40AF' : '2px solid transparent',
                            marginBottom: -1,
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Schedule Items */}
            <div className="d-flex flex-column gap-3">
                {schedule.map((item) => {
                    const colors = categoryColors[item.category] || { bg: '#F3F4F6', color: '#374151' }
                    return (
                        <div key={item.id}>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    className="px-2 py-1"
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 500,
                                        borderRadius: 20,
                                        backgroundColor: colors.bg,
                                        color: colors.color,
                                    }}
                                >
                                    {item.category}
                                </span>
                                <ChevronDown size={14} className="text-muted" style={{ cursor: 'pointer' }} />
                            </div>

                            <p className="fw-medium mb-1" style={{ fontSize: 14 }}>{item.title}</p>
                            <p className="small text-muted mb-2" style={{ fontSize: 11 }}>{item.time}</p>

                            {/* Avatars */}
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="small text-muted me-2" style={{ fontSize: 11 }}>On Google Meet</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    {[1, 2, 3].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                                            alt="avatar"
                                            className="rounded-circle border border-white"
                                            style={{
                                                width: 24,
                                                height: 24,
                                                marginLeft: i === 1 ? 0 : -8,
                                                objectFit: 'cover',
                                            }}
                                        />
                                    ))}
                                    <span
                                        className="rounded-circle d-flex align-items-center justify-content-center bg-light border border-white"
                                        style={{ width: 24, height: 24, marginLeft: -8, fontSize: 10, fontWeight: 600 }}
                                    >
                                        +{item.attendees}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScheduleCard