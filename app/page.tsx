'use client';

import Link from 'next/link';
import { useState } from 'react';

// Our database
const businesses = [
  { id: 1, name: "Maputo Fresh Groceries", category: "Retail", location: "Maputo", description: "Fresh, organic local produce delivered directly from Mozambican farmers to your door.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Matola Tech Repair", category: "Services", location: "Matola", description: "Quick, affordable, and reliable phone and laptop repairs by certified technicians.", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Beira Bite Cafe", category: "Food & Drink", location: "Beira", description: "The best artisanal coffee, fresh pastries, and a relaxing workspace in the city.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Nampula Textiles", category: "Fashion", location: "Nampula", description: "Authentic, handcrafted traditional capulanas and modern custom clothing.", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop" }
];

const categories = ['All', 'Retail', 'Services', 'Food & Drink', 'Fashion'];

export default function Home() {
  // This is the "React State" that makes the magic work!
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // This instantly filters the list as the user types or clicks
  const filteredBusinesses = businesses.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || biz.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          <div className="space-x-8 text-sm font-semibold">
            <Link href="/" className="text-blue-800 border-b-2 border-orange-500 pb-1">Directory</Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-800 transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <header className="relative bg-blue-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Discover Local <span className="text-orange-400">Brilliance</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-10 drop-shadow-md">
            Support our community by shopping local. Browse the best small businesses across Mozambique.
          </p>
          
          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto bg-white rounded-full p-2 flex shadow-xl">
            <input 
              type="text" 
              placeholder="Search by name or city (e.g., Maputo)..." 
              className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 flex-grow">
        
        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeCategory === category 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Featured Businesses</h2>
          <span className="text-sm font-bold text-blue-800 bg-blue-100 py-1 px-4 rounded-full">
            {filteredBusinesses.length} Results
          </span>
        </div>

        {/* Dynamic Grid based on search */}
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredBusinesses.map((biz) => (
              <div key={biz.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100">
                <div className="h-56 w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-black text-white bg-blue-800/90 backdrop-blur-sm py-1.5 px-3 rounded-full uppercase tracking-widest shadow-sm">
                      {biz.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">{biz.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 font-semibold flex items-center gap-1">📍 {biz.location}</p>
                    <p className="text-gray-600 leading-relaxed">{biz.description}</p>
                  </div>
                  
                  <Link href="/contact" className="mt-6 inline-flex items-center text-blue-800 font-bold hover:text-orange-500 transition-colors group/btn">
                    Contact Business <span className="ml-2 group-hover/btn:translate-x-2 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No businesses found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center mt-auto">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">Moz<span className="text-orange-500">Biz</span></div>
        <p className="text-sm">© 2026 MozBiz Directory. Built professionally for class.</p>
      </footer>
    </main>
  );
}