import { useEffect, useState } from 'react'
import { getProducts } from '../api/services'
import { useDebounce } from '../hooks/useDebounce'
import ProductsHeader from '../components/products/ProductsHeader'
import ProductCard from '../components/products/ProductCard'

function ProductList() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 400)

    useEffect(() => {
        const url = debouncedSearch ? `?q=${debouncedSearch}` : ''
        getProducts(url).then((res) => setProducts(res.data))
    }, [debouncedSearch])

    return (
        <div>
            <ProductsHeader count={products.length} search={search} setSearch={setSearch} />

            {products.length === 0 ? (
                <div className="text-center py-5 text-muted">No products found</div>
            ) : (
                <div className="row g-3">
                    {products.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList