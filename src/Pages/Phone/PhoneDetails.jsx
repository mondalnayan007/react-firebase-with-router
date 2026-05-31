import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const singlePhone = useLoaderData();

    // Data safely check korar jonne fallback handling
    if (!singlePhone) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <p className="text-slate-500 font-medium">Loading phone details...</p>
            </div>
        );
    }

    const { 
        brand, 
        model, 
        release_year, 
        price_usd, 
        is_available, 
        colors_available, 
        image_url, 
        specs 
    } = singlePhone;

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                
                {/* Main Grid: Image on Left, Details on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Side: Premium Image Container */}
                    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                        <img 
                            src={image_url} 
                            alt={`${brand} ${model}`} 
                            className="w-full h-auto max-h-[500px] object-contain rounded-2xl mix-blend-multiply"
                        />
                    </div>

                    {/* Right Side: Phone Info Details */}
                    <div className="flex flex-col h-full justify-center">
                        
                        {/* Badges & Meta info */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-md">
                                {brand}
                            </span>
                            <span className="text-sm font-medium text-slate-400">
                                Released: {release_year}
                            </span>
                        </div>

                        {/* Title & Availability */}
                        <div className="flex flex-wrap items-baseline gap-4 mb-6">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                {model}
                            </h1>
                            <span className={`px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border ${
                                is_available 
                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                                    : 'bg-rose-50 text-rose-600 border-rose-200'
                            }`}>
                                {is_available ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Price Tag */}
                        <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 inline-block max-w-[200px]">
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Price</p>
                            <p className="text-3xl font-black text-slate-900 mt-1">${price_usd}</p>
                        </div>

                        {/* Available Colors section */}
                        {colors_available && colors_available.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Available Colors</h3>
                                <div className="flex flex-wrap gap-2">
                                    {colors_available.map((color, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1.5 text-sm font-medium rounded-xl bg-white text-slate-700 border border-slate-200 shadow-sm"
                                        >
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specifications Table Layout */}
                        <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm mb-8">
                            <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Technical Specifications</h3>
                            </div>
                            <div className="divide-y divide-slate-100 text-sm">
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Processor</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.processor || 'N/A'}</div>
                                </div>
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Memory (RAM)</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.ram || 'N/A'}</div>
                                </div>
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Storage</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.storage || 'N/A'}</div>
                                </div>
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Display</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.display || 'N/A'}</div>
                                </div>
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Battery</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.battery || 'N/A'}</div>
                                </div>
                                <div className="grid grid-cols-3 px-5 py-3">
                                    <div className="font-semibold text-slate-500">Main Camera</div>
                                    <div className="col-span-2 text-slate-800 font-medium">{specs?.camera?.main || 'N/A'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                disabled={!is_available}
                                className={`flex-1 py-4 px-6 font-bold text-base rounded-2xl shadow-md transition-all duration-200 text-center ${
                                    is_available 
                                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10 active:scale-[0.98]' 
                                        : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                                }`}
                            >
                                {is_available ? 'Proceed to Checkout' : 'Sold Out'}
                            </button>
                            <button className="py-4 px-6 font-bold text-base text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all active:scale-[0.98]">
                                Add to Wishlist
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhoneDetails;