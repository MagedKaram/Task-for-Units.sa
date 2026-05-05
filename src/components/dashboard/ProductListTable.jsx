import { useEffect, useState } from 'react'
import { Search, ArrowUpRight, ArrowClockwise } from 'react-bootstrap-icons'
import { Form } from 'react-bootstrap'
import { getProducts } from '../../api/services'
import { useDebounce } from '../../hooks/useDebounce'

function ProductListTable() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search)

    useEffect(() => {
        const q = debouncedSearch ? `?q=${debouncedSearch}` : ''
        getProducts(q).then((res) => setProducts(res.data))
    }, [debouncedSearch])

    return (
        <div
            className="bg-white p-3 flex-grow-1"
            style={{ borderRadius: 16, border: '1px solid #E5E7EB' }}
        >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold" style={{ fontSize: 20 }}>{products.length}</span>
                    <span className="text-muted small">Item</span>
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
                <div className="d-flex align-items-center gap-2">
                    <span className="small text-muted" style={{ cursor: 'pointer' }}>See More</span>
                    <Search size={14} className="text-muted" style={{ cursor: 'pointer' }} />
                </div>
            </div>

            {/* Search */}
            <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
                <div
                    className="d-flex align-items-center gap-2 bg-white px-3 flex-grow-1"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 8, height: 36, maxWidth: 400 }}
                >
                    <Search size={13} className="text-muted" />
                    <input
                        type="text"
                        className="border-0 small w-100"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ outline: 'none', background: 'transparent' }}
                    />
                </div>
                <button
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{ border: '1px solid #E5E7EB', borderRadius: 8, width: 36, height: 36 }}
                    onClick={() => setSearch('')}
                >
                    <ArrowClockwise size={14} />
                </button>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table align-middle mb-0">
                    <thead>
                        <tr style={{ fontSize: 12 }}>
                            <th style={{ width: 30 }}><Form.Check /></th>
                            <th className="text-muted fw-medium">Product Name</th>
                            <th className="text-muted fw-medium">Revenue</th>
                            <th className="text-muted fw-medium">Sales</th>
                            <th className="text-muted fw-medium">Reviews</th>
                            <th className="text-muted fw-medium">Views</th>
                            <th className="text-muted fw-medium">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} style={{ fontSize: 13 }}>
                                <td><Form.Check /></td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }}
                                        />
                                        <div>
                                            <div className="fw-medium">{product.name}</div>
                                            <div className="small text-muted" style={{ fontSize: 11 }}>{product.stock}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${product.revenue}</td>
                                <td>{product.sales.toLocaleString()}</td>
                                <td>{product.reviews.toLocaleString()}</td>
                                <td>{product.views.toLocaleString()}</td>
                                <td>
                                    <Form.Check type="switch" defaultChecked={product.active} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductListTable