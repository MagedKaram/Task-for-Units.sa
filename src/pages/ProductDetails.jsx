import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import { getProductById } from '../api/services'
import EditProductModal from '../components/products/EditProductModal'

function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getProductById(id)
            .then((res) => setProduct(res.data))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <div className="p-4 text-muted">Loading...</div>
    if (!product) return <div className="p-4 text-muted">Product not found</div>

    return (
        <div>
            <button
                className="bg-white d-flex align-items-center gap-2 px-3 py-2 mb-4"
                style={{ border: '1px solid #E5E7EB', borderRadius: 24, fontSize: 13 }}
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={14} /> Back
            </button>

            <div className="bg-white p-4" style={{ borderRadius: 16, border: '1px solid #E5E7EB' }}>
                <div className="row g-4">
                    <div className="col-12 col-md-5">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100"
                            style={{ borderRadius: 12, objectFit: 'cover', maxHeight: 400 }}
                        />
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="d-flex align-items-center gap-2 mb-2">
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
                            <span className="small text-muted">{product.stock}</span>
                        </div>

                        <h3 className="fw-bold mb-3">{product.name}</h3>

                        <h4 className="fw-bold mb-4" style={{ color: '#3B82F6' }}>
                            ${product.revenue}
                        </h4>

                        <div className="row g-3 mb-4">
                            <div className="col-6 col-sm-4">
                                <div className="p-3" style={{ backgroundColor: '#F9FAFB', borderRadius: 12 }}>
                                    <p className="small text-muted mb-1" style={{ fontSize: 12 }}>Sales</p>
                                    <p className="fw-bold mb-0">{product.sales.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4">
                                <div className="p-3" style={{ backgroundColor: '#F9FAFB', borderRadius: 12 }}>
                                    <p className="small text-muted mb-1" style={{ fontSize: 12 }}>Reviews</p>
                                    <p className="fw-bold mb-0">{product.reviews.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4">
                                <div className="p-3" style={{ backgroundColor: '#F9FAFB', borderRadius: 12 }}>
                                    <p className="small text-muted mb-1" style={{ fontSize: 12 }}>Views</p>
                                    <p className="fw-bold mb-0">{product.views.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-dark px-4" onClick={() => setShowModal(true)}>
                            Edit Product
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <EditProductModal
                    key={product.id}
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    product={product}
                    onUpdated={setProduct}
                />
            )}
        </div>
    )
}

export default ProductDetails