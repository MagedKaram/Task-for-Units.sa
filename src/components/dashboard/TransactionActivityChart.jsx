import { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'
import { getTransactionActivity } from '../../api/services'

function TransactionActivityChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        getTransactionActivity().then((res) => setData(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 flex-grow-1"
            style={{ borderRadius: 16, border: '1px solid #E5E7EB', minWidth: 300 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold mb-0">Transaction Activity</h6>
                <button
                    className="bg-white d-flex align-items-center gap-1 px-2 py-1"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}
                >
                    Last Year
                </button>
            </div>

            {/* Legend */}
            <div className="d-flex gap-3 mb-2">
                <div className="d-flex align-items-center gap-1">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1E40AF' }} />
                    <span className="small text-muted" style={{ fontSize: 11 }}>Total Transaction</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#60A5FA' }} />
                    <span className="small text-muted" style={{ fontSize: 11 }}>Success Transaction</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F3F5" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#1E40AF" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="success" stroke="#60A5FA" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TransactionActivityChart