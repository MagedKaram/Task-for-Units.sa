import { Search } from 'react-bootstrap-icons'

function ProductsHeader({ count, search, setSearch }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
                <h4 className="fw-bold mb-1">Products</h4>
                <p className="small text-muted mb-0">{count} items found</p>
            </div>

            <div
                className="d-flex align-items-center gap-2 bg-white px-3"
                style={{ border: '1px solid #E5E7EB', borderRadius: 24, height: 38, minWidth: 240 }}
            >
                <Search size={13} className="text-muted" />
                <input
                    type="text"
                    className="border-0 small w-100"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ outline: 'none', background: 'transparent' }}
                />
            </div>
        </div>
    )
}

export default ProductsHeader