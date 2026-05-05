import { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'
import { getProductStatics } from '../../api/services'

// Move CustomTooltip outside the component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload
        return (
            <div
                className="bg-white p-2"
                style={{ border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 12 }}
            >
                <div className="fw-medium mb-1">{label}</div>
                <div className="d-flex align-items-center gap-1" style={{ color: '#3B82F6' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3B82F6' }} />
                    <span>Value: {item.value}</span>
                </div>
            </div>
        )
    }
    return null
}

function ProductStaticsChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        getProductStatics().then((res) => setData(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 flex-grow-1 d-flex flex-column"
            style={{ borderRadius: 16, border: '1px solid #E5E7EB', minWidth: 300 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold mb-0">Product Statics</h6>
                <button
                    className="bg-white d-flex align-items-center gap-1 px-2 py-1"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}
                >
                    Last Year
                </button>
            </div>

            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F3F5" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6c757d' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#6c757d' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

                    <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} background={{ fill: '#DBEAFE', radius: 6 }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProductStaticsChart