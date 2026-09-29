import React from 'react';
import ProductCard from '../components/ProductCard';
import { productDataType } from '../type';

const getProducts =async ()=>{
    const res = await fetch("http://localhost:5000/products", {
        // cache: 'force-cache'
        cache: 'no-store'
    });
    return res.json();
}

const ProductsPage = async () => {

    const products: productDataType[] = await getProducts();

    return (
        <div className='grid grid-cols-3 gap-4 mt-10 container mx-auto'>
            {
                products.map((product : productDataType) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    );
};

export default ProductsPage;