import React, { useEffect, useState } from 'react';
import ProductsCard from '../../Components/ProductsCard/ProductCard';



const Products = () => {

    const [products , setProducts] = useState([]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // console.log(products);

    

    return (
        <div>
            {
                products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;