import React from 'react';

const PhonesCard = ({ phone }) => {
  // Dynamic data destructuring
  const { 
    brand, 
    model, 
    release_year, 
    price_usd, 
    is_available, 
    colors_available, 
    image_url, 
    specs 
  } = phone;

  return (
    /* Premium White/Light Card Container */
    <div className="relative w-full max-w-sm rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1">
      
      {/* Product Image Section */}
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <img 
          src={image_url} 
          alt={`${brand} ${model}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Availability Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full backdrop-blur-md border ${
          is_available 
            ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
            : 'bg-rose-50 text-rose-600 border-rose-200'
        }`}>
          {is_available ? 'In Stock' : 'Out of Stock'}
        </span>
        
        {/* Release Year Badge */}
        <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium rounded-md bg-white/80 text-slate-600 border border-slate-200/50 backdrop-blur-sm">
          {release_year}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Brand & Title */}
        <div className="mb-4">
          <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase">{brand}</p>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight mt-0.5">{model}</h2>
        </div>

        {/* Key Specs Chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {specs?.processor && <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-100">{specs.processor}</span>}
          {specs?.ram && <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-100">{specs.ram} RAM</span>}
          {specs?.storage && <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-100">{specs.storage}</span>}
          {specs?.camera?.main && <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-100">{specs.camera.main} Main</span>}
        </div>

        {/* Color Options Selection */}
        {colors_available && colors_available.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Available Colors</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {colors_available.map((color, index) => (
                <span 
                  key={index} 
                  title={color}
                  className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-600 border border-slate-200/40"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Soft Divider */}
        <hr className="border-slate-100 my-4" />

        {/* Footer: Price & Action Button */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-slate-400 font-medium">Price</p>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight">${price_usd}</p>
          </div>
          <button 
            disabled={!is_available}
            className={`px-5 py-2.5 font-semibold text-sm rounded-xl shadow-md transition-all duration-200 focus:outline-none ${
              is_available 
                ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10 active:scale-95' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            {is_available ? 'Buy Now' : 'Sold Out'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PhonesCard;