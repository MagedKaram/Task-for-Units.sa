import DashboardHeader from '../components/dashboard/DashboardHeader'
import StatCards from '../components/dashboard/StatCards'
import TransactionActivityChart from '../components/dashboard/TransactionActivityChart'
import SalePerformanceChart from '../components/dashboard/SalePerformanceChart'
import OrdersByTimeChart from '../components/dashboard/OrdersByTimeChart'
import ProductStaticsChart from '../components/dashboard/ProductStaticsChart'
import ScheduleCard from '../components/dashboard/ScheduleCard'
import ProductListTable from '../components/dashboard/ProductListTable'
import ConversionRateCard from '../components/dashboard/ConversionRateCard'

function Dashboard() {
    return (
        <div>
            <DashboardHeader />
            <StatCards />

            <div className="d-flex gap-3 flex-wrap mb-4">
                <div className="d-flex flex-column gap-3 flex-grow-1" style={{ minWidth: 300 }}>
                    <div className="d-flex gap-3 flex-wrap">
                        <div style={{ flex: 1 }}><TransactionActivityChart /></div>
                        <div style={{ flex: 1 }}><SalePerformanceChart /></div>
                    </div>
                    <div className="d-flex gap-3 flex-wrap">
                        <div style={{ flex: 1 }}><OrdersByTimeChart /></div>
                        <div style={{ flex: 1 }}><ProductStaticsChart /></div>
                    </div>
                </div>
                <ScheduleCard />
            </div>

            <div className="bg-light p-4" style={{ borderRadius: 16 }}>
                <h5 className="fw-bold mb-3">Product List</h5>
                <div className="d-flex gap-3 flex-wrap">
                    <ProductListTable />
                    <ConversionRateCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard