import { useEffect, useState } from 'react'
import { Search, Calendar } from 'react-bootstrap-icons'
import { getOrdersByTime } from '../../api/services'

function getColor(value) {
    if (value >= 1500) return '#1E40AF'
    if (value >= 800) return '#3B82F6'
    if (value >= 300) return '#93C5FD'
    if (value >= 50) return '#DBEAFE'
    return '#EFF6FF'
}

function OrdersByTimeChart() {
    const [data, setData] = useState([])
    const days = Array.from({ length: 16 }, (_, i) => 12 + i)

    useEffect(() => {
        getOrdersByTime().then((res) => setData(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 flex-grow-1"
            style={{ borderRadius: 16, border: '1px solid #E5E7EB', minWidth: 300 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <h6 className="fw-semibold mb-0">Orders By Time</h6>
                <div className="d-flex align-items-center gap-2">
                    {/* Legend */}
                    <div className="d-flex align-items-center gap-1 px-2 py-1" style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}>
                        <span>0</span>
                        <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#EFF6FF' }} />
                        <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#DBEAFE' }} />
                        <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#93C5FD' }} />
                        <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#3B82F6' }} />
                        <span>2500</span>
                    </div>
                    <button className="bg-white d-flex align-items-center gap-1 px-2 py-1" style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}>
                        January 2025 <Calendar size={12} />
                    </button>
                    <button className="bg-white d-flex align-items-center justify-content-center" style={{ border: '1px solid #E5E7EB', borderRadius: '50%', width: 28, height: 28 }}>
                        <Search size={12} />
                    </button>
                </div>
            </div>

            {/* Heatmap */}
            <div className="d-flex flex-column gap-1">
                {data.map((row) => (
                    <div key={row.hour} className="d-flex align-items-center gap-2">
                        <span className="text-muted" style={{ fontSize: 11, width: 30 }}>{row.hour}</span>
                        <div className="d-flex gap-1 flex-grow-1">
                            {row.data.map((val, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: 1,
                                        aspectRatio: '1',
                                        backgroundColor: getColor(val),
                                        borderRadius: 6,
                                    }}
                                    title={`${val}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Days */}
                <div className="d-flex align-items-center gap-2 mt-2">
                    <span style={{ width: 30 }}></span>
                    <div className="d-flex gap-1 flex-grow-1">
                        {days.map((d) => (
                            <span key={d} className="text-muted text-center" style={{ fontSize: 11, flex: 1 }}>{d}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersByTimeChart