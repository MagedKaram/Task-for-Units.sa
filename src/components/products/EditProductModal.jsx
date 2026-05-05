import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { updateProduct } from '../../api/services'

function EditProductModal({ show, onHide, product, onUpdated }) {
    const [formData, setFormData] = useState(product)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await updateProduct(product.id, formData)
            onUpdated(res.data)
            onHide()
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: 18 }}>Edit Product</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-medium">Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-medium">Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="row g-2">
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-medium">Revenue</Form.Label>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    name="revenue"
                                    value={formData.revenue}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-medium">Sales</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="sales"
                                    value={formData.sales}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-medium">Reviews</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="reviews"
                                    value={formData.reviews}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-medium">Views</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="views"
                                    value={formData.views}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label className="small fw-medium">Stock</Form.Label>
                        <Form.Select name="stock" value={formData.stock} onChange={handleChange}>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Check
                        type="switch"
                        name="active"
                        label="Active"
                        checked={formData.active}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={onHide}>Cancel</Button>
                    <Button type="submit" variant="dark" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default EditProductModal