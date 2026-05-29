import React, { useEffect, useState } from 'react';
import ProductsCard from '../../Components/ProductsCard/ProductCard';

const Products = () => {
    // ২টি স্টেট ব্যবহার করব
    const [products, setProducts] = useState([]); // মূল ডাটা ধরে রাখবে
    const [filteredProducts, setFilteredProducts] = useState([]); // স্ক্রিনে দেখানোর জন্য ডাটা

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);         // মূল স্টেটে ডাটা রাখলাম
                setFilteredProducts(data); // শুরুতে সব প্রোডাক্টই স্ক্রিনে দেখাব
            })
    }, [])

    const filterByCategory = (type) => {
        if (type === 'all') {
            setFilteredProducts(products); // 'all' হলে মেইন ডাটাটাই আবার সেট করব
        } else {
            // ফিল্টার করব মূল 'products' স্টেট থেকে, কিন্তু সেট করব 'filteredProducts' এ
            const singleData = products.filter(single => single.category === type);
            setFilteredProducts(singleData);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className='text-2xl font-bold text-center my-5'>Products Section</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-6'>
                {/* ক্যাটাগরি বাটন সেকশন */}
                <div className='flex flex-col gap-3 sm:col-span-1'>
                    <h3 className="font-semibold text-gray-700 hidden sm:block">Categories</h3>
                    {/* All বাটন যোগ করা হয়েছে */}
                    <button onClick={() => filterByCategory("all")} className='border text-left rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors'>All Products</button>
                    <button onClick={() => filterByCategory("men's clothing")} className='border text-left rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors'>Men's clothing</button>
                    <button onClick={() => filterByCategory("jewelery")} className='border text-left rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors'>Jewelery</button>
                    <button onClick={() => filterByCategory("electronics")} className='border text-left rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors'>Electronics</button>
                    <button onClick={() => filterByCategory("women's clothing")} className='border text-left rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors'>Women's clothing</button>
                </div>

                {/* প্রোডাক্ট গ্রিড সেকশন */}
                <div className='grid sm:col-span-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* এখন আমরা লুপ চালাব filteredProducts এর ওপর */}
                    {
                        filteredProducts.map(product => (
                            <ProductsCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;