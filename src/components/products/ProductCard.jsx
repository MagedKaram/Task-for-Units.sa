import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
    const navigate = useNavigate()

    return (
        <div
            className="bg-white p-3 h-100"
            style={{
                borderRadius: 16,
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onClick={() => navigate(`/products/${product.id}`)}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-100 mb-3"
                style={{ height: 140, borderRadius: 12, objectFit: 'cover' }}
            />
            <h6 className="fw-semibold mb-1" style={{ fontSize: 14 }}>{product.name}</h6>
            <p className="small text-muted mb-2" style={{ fontSize: 11 }}>{product.stock}</p>

            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold" style={{ fontSize: 14 }}>${product.revenue}</span>
                <span
                    className="px-2 py-1"
                    style={{
                        fontSize: 11,
                        borderRadius: 20,
                        backgroundColor: product.active ? '#E8F5E9' : '#FEE2E2',
                        color: product.active ? '#2E7D32' : '#991B1B',
                    }}
                >
                    {product.active ? 'Active' : 'Inactive'}
                </span>
            </div>
        </div>
    )
}

export default ProductCard