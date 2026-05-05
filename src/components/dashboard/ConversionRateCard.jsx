import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'react-bootstrap-icons'
import { getConversionRate } from '../../api/services'

function ConversionRateCard() {
    const [data, setData] = useState([])

    useEffect(() => {
        getConversionRate().then((res) => setData(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 d-flex flex-column"
            style={{
                borderRadius: 16,
                border: '1px solid #E5E7EB',
                width: 280,
                flexShrink: 0,
            }}
        >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold mb-0">Conversion Rate</h6>
                <button
                    className="bg-white d-flex align-items-center gap-1 px-2 py-1"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}
                >
                    Last Year
                </button>
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

            {/* List */}
            <div className="d-flex flex-column gap-3 flex-grow-1">
                {data.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="fw-medium" style={{ fontSize: 13 }}>{item.label}</div>
                            <div className="small text-muted" style={{ fontSize: 11 }}>{item.percentage}%</div>
                        </div>
                        <div className="fw-bold" style={{ fontSize: 13 }}>
                            {item.value.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>

            {/* Learn More */}
            <div className="text-center mt-3">
                <button className="btn btn-link p-0 small text-muted d-flex align-items-center gap-1 mx-auto" style={{ textDecoration: 'none' }}>
                    Learn More <ArrowRight size={12} />
                </button>
            </div>
        </div>
    )
}

export default ConversionRateCard