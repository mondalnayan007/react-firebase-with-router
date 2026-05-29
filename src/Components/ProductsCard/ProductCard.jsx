import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    // ডাটা স্ট্রাকচার থেকে ভ্যালুগুলো Destructure করে নেওয়া হলো
    const {id, title, price, description, category, image, rating } = product;

    return (
        <Link to={`/product-details/${id}`}>
            <div className="max-w-sm bg-white rounded-xl border border-gray-100 hover:shadow-2xl  cursor-pointer transition-shadow duration-300 overflow-hidden flex flex-col group">

                {/* ১. প্রোডাক্ট ইমেজ সেকশন */}
                <div className="relative bg-gray-50 pt-[100%] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* ক্যাটাগরি ব্যাজ */}
                    <span className="absolute top-3 left-3 bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                        {category}
                    </span>
                </div>

                {/* ২. প্রোডাক্ট ডিটেইলস সেকশন */}
                <div className="p-5 flex flex-col flex-grow">

                    {/* রেটিং (Rating) */}
                    <div className="flex items-center gap-1 mb-2">
                        {/* Star SVG */}
                        <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">{rating?.rate}</span>
                        <span className="text-xs text-gray-400">({rating?.count} reviews)</span>
                    </div>

                    {/* টাইটেল (Title) */}
                    <h3 className="text-gray-800 font-semibold text-base line-clamp-1 group-hover:text-blue-600 transition-colors mb-1" title={title}>
                        {title}
                    </h3>

                    {/* ডেসক্রিপশন (Description) */}
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                        {description}
                    </p>

                    {/* ৩. প্রাইস এবং বাটন সেকশন */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 font-medium">Price</span>
                            <span className="text-xl font-bold text-gray-900">${price}</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 active:scale-95 duration-150">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add
                        </button>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default ProductCard;