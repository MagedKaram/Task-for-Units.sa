import { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import { ArrowUpRight } from 'react-bootstrap-icons'
import { getSalePerformance } from '../../api/services'

const CustomBar = (props) => {
    const { x, y, width, height } = props
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill="url(#blueGradient)" />
            <line
                x1={x}
                y1={y}
                x2={x + width}
                y2={y}
                stroke="#3B82F6"
                strokeWidth={2}
            />
        </g>
    )
}

function SalePerformanceChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        getSalePerformance().then((res) => setData(res.data))
    }, [])

    return (
        <div
            className="bg-white p-3 flex-grow-1"
            style={{ borderRadius: 16, border: '1px solid #E5E7EB', minWidth: 300 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                    <h6 className="fw-semibold mb-0">Sale Performance</h6>
                    <span className="fw-bold" style={{ fontSize: 14 }}>
                        91.72<span className="text-muted">%</span>
                    </span>
                    <span
                        className="d-flex align-items-center gap-1 px-2 py-1"
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            borderRadius: 20,
                            backgroundColor: '#E8F5E9',
                            color: '#2E7D32',
                        }}
                    >
                        <ArrowUpRight size={11} /> +8.33%
                    </span>
                </div>
                <button
                    className="bg-white d-flex align-items-center gap-1 px-2 py-1"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 20, fontSize: 11 }}
                >
                    Last Year
                </button>
            </div>

            <ResponsiveContainer width="100%" height={240}>
                <BarChart data={data} barCategoryGap={0}>
                    <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 11, fill: '#6c757d' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="value" shape={<CustomBar />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalePerformanceChart