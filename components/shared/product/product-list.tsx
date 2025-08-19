import ProductCard from "@/components/shared/product/product-card";


const ProductList = ({ data, title, limit }: ProductListProps) => {

    const displayedProducts = limit ? data.slice(0, limit) : data;

    return (<div className="my-10">
        <h2>{title}</h2>

        {data.length > 0 ? (


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


                {displayedProducts.map((product: Product) => (
                    <ProductCard key={product.slug} product={product} />


                ))}
            </div>

        ) : (
            <p>No products available.</p>
        )}

    </div>);
}

export default ProductList;