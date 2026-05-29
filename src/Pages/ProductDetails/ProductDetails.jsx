import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const [quantity, setQuantity] = useState(1);

    // ডাটা লোড হতে সময় লাগলে বা কোনো কারণে ডাটা না থাকলে সেফটি চেক
    if (!product) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const { title, price, description, category, image, rating } = product;

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ব্যাক বাটন বা ব্রেডক্রাম্ব */}
                <div className="mb-6">
                    <Link to="/products" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>
                </div>

                {/* মেইন গ্রিড লেআউট */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8">
                    
                    {/* বাম পাশ: ইমেজ সেকশন */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8 max-h-[500px]">
                        <img 
                          src={image} 
                          alt={title} 
                          className="max-h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* ডান পাশ: প্রোডাক্ট ইনফরমেশন */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* ক্যাটাগরি ও স্টক স্ট্যাটাস */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full capitalize tracking-wide">
                                    {category}
                                </span>
                                <span className="text-emerald-600 text-sm font-medium flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                                    In Stock
                                </span>
                            </div>

                            {/* প্রোডাক্ট টাইটেল */}
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3">
                                {title}
                            </h1>

                            {/* রেটিং সেকশন */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center text-amber-400 fill-current">
                                    {[...Array(5)].map((_, index) => (
                                        <svg 
                                          key={index} 
                                          className={`w-5 h-5 ${index < Math.round(rating?.rate || 0) ? 'text-amber-400' : 'text-gray-200'}`} 
                                          viewBox="0 0 20 20" 
                                          fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{rating?.rate}</span>
                                <span className="text-sm text-gray-400">({rating?.count} verified reviews)</span>
                            </div>

                            {/* প্রাইস সেকশন */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                <p className="text-xs text-gray-400 font-medium mb-1">Total Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-extrabold text-gray-900">${price}</span>
                                    <span className="text-sm text-gray-500 line-through">${(price * 1.2).toFixed(2)}</span>
                                    <span className="text-sm font-semibold text-red-500">(20% OFF)</span>
                                </div>
                            </div>

                            {/* ডেসক্রিপশন */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* ৪. কোয়ান্টিটি এবং অ্যাকশন বাটন */}
                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                
                                {/* কোয়ান্টিটি কাউন্টার */}
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                                    <button 
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 text-gray-800 font-semibold text-sm w-12 text-center">
                                        {quantity}
                                    </span>
                                    <button 
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;