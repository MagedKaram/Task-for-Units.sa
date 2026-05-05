import { ArrowUpRight, ArrowDownRight } from 'react-bootstrap-icons'

function StatCard({ title, value, change, date }) {
    const isPositive = change >= 0

    // Split value into integer and decimal parts
    const formatted = value.toLocaleString('en-US', { minimumFractionDigits: 2 })
    const [intPart, decimalPart] = formatted.split('.')

    return (
        <div
            className="bg-white p-3 flex-grow-1 d-flex flex-column"
            style={{
                borderRadius: 16,
                border: '1px solid #E5E7EB',
                minWidth: 200,
                minHeight: 140,
            }}
        >
            <div className="d-flex align-items-start justify-content-between mb-2">
                <p className="small text-muted mb-0" style={{ fontSize: 12 }}>{title}</p>
                <span
                    className="d-flex align-items-center gap-1 px-2 py-1"
                    style={{
                        fontSize: 11,
                        fontWeight: 600,
                        borderRadius: 20,
                        backgroundColor: isPositive ? '#E8F5E9' : '#FFEBEE',
                        color: isPositive ? '#2E7D32' : '#C62828',
                    }}
                >
                    {isPositive ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                    {Math.abs(change)}%
                </span>
            </div>

            <h4 className="fw-bold mb-2" style={{ fontSize: 24 }}>
                ${intPart}
                <span style={{ color: '#B0B7C0' }}>.{decimalPart}</span>
            </h4>

            <p className="mb-0 text-muted mt-auto" style={{ fontSize: 11 }}>
                {date}
            </p>
        </div>
    )
}

export default StatCard