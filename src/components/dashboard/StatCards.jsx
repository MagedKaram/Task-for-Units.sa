import { useEffect, useState } from 'react'
import { getStats } from '../../api/services'
import StatCard from './StatCard'
import PromoCard from './PromoCard'

function StatCards() {
    const [stats, setStats] = useState(null)

    useEffect(() => {
        getStats().then((res) => setStats(res.data[0]))
    }, [])

    if (!stats) return null

    return (
        <div className="d-flex gap-3 flex-wrap mb-4">
            <PromoCard />
            <StatCard
                title="Gross Revenue"
                value={stats.grossRevenue}
                change={stats.grossRevenueChange}
                date="From Jan 01, 2025 - March 30, 2024"
            />
            <StatCard
                title="Avg. Order Value"
                value={stats.avgOrderValue}
                change={stats.avgOrderValueChange}
                date="From Jan 01, 2025 - March 30, 2024"
            />
            <StatCard
                title="Total Orders"
                value={stats.totalOrders}
                change={stats.totalOrdersChange}
                date="From Jan 01, 2025 - March 30, 2024"
            />
        </div>
    )
}

export default StatCards