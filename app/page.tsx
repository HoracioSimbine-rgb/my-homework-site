'use client';

import Link from 'next/link';
import { useState } from 'react';

// MEGA 36-Business Database!
const businesses = [
  // Original 18
  { id: 1, name: "Maputo Fresh Groceries", category: "Retail", location: "Maputo", description: "Fresh, organic local produce delivered directly from Mozambican farmers to your door.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Matola Tech Repair", category: "Services", location: "Matola", description: "Quick, affordable, and reliable phone and laptop repairs by certified technicians.", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Beira Bite Cafe", category: "Food & Drink", location: "Beira", description: "The best artisanal coffee, fresh pastries, and a relaxing workspace in the city.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Nampula Textiles", category: "Fashion", location: "Nampula", description: "Authentic, handcrafted traditional capulanas and modern custom clothing.", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Pemba Ocean Tours", category: "Services", location: "Pemba", description: "Guided snorkeling, diving, and boat tours exploring the beautiful Quirimbas Archipelago.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Tete Mining Supplies", category: "Retail", location: "Tete", description: "High-quality industrial and safety equipment for local contractors and builders.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Zambezia Organic Tea", category: "Food & Drink", location: "Gurué", description: "Premium, locally grown and harvested tea leaves straight from the mountains.", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Inhambane Surf Shop", category: "Retail", location: "Tofo", description: "Surfboard rentals, beachwear, and lessons for beginners to advanced surfers.", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop" },
  { id: 9, name: "Chimoio Agro-Tech", category: "Tech", location: "Chimoio", description: "Smart farming solutions and software tools to help local farmers increase crop yield.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "Vilankulo Seaside Clinic", category: "Health", location: "Vilankulo", description: "Dedicated community healthcare, pharmacy, and emergency medical services.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "Maputo Code Academy", category: "Tech", location: "Maputo", description: "In-person coding bootcamps teaching the next generation of software developers.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" },
  { id: 12, name: "Xai-Xai Auto Repair", category: "Services", location: "Xai-Xai", description: "Trusted mechanics providing full vehicle servicing, tire replacement, and diagnostics.", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" },
  { id: 13, name: "Nacala Port Logistics", category: "Services", location: "Nacala", description: "Efficient freight forwarding and storage solutions near the deep-water port.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" },
  { id: 14, name: "Quelimane Seafood Catch", category: "Food & Drink", location: "Quelimane", description: "Daily fresh catches of prawns, crab, and fish straight from the Zambezia coast.", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=600&auto=format&fit=crop" },
  { id: 15, name: "Maxixe Transport Hub", category: "Services", location: "Maxixe", description: "Reliable intercity bus bookings and private transport rentals across the province.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" },
  { id: 16, name: "Lichinga Pine Furniture", category: "Retail", location: "Lichinga", description: "Beautiful, durable, handcrafted furniture made from locally sourced Niassa pine.", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop" },
  { id: 17, name: "Maputo Fitness Oasis", category: "Health", location: "Maputo", description: "State-of-the-art gym equipment, personal training, and group wellness classes.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
  { id: 18, name: "Gorongosa Eco-Lodge", category: "Services", location: "Gorongosa", description: "Sustainable safari accommodation offering guided tours of the national park.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop" },
  
  // 18 BRAND NEW BUSINESSES!
  { id: 19, name: "Matola Artisan Bakery", category: "Food & Drink", location: "Matola", description: "Warm, freshly baked bread, cakes, and traditional Mozambican savory snacks.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" },
  { id: 20, name: "Beira Enterprise IT", category: "Tech", location: "Beira", description: "Network installations, cybersecurity, and cloud solutions for growing businesses.", image: "https://images.unsplash.com/photo-1519389953810-1950815c7e43?q=80&w=600&auto=format&fit=crop" },
  { id: 21, name: "Maputo Modern Boutique", category: "Fashion", location: "Maputo", description: "Contemporary urban wear blending modern street style with African prints.", image: "https://images.unsplash.com/photo-1441983114761-f1a1d41c882a?q=80&w=600&auto=format&fit=crop" },
  { id: 22, name: "Vilankulo Craft Market", category: "Retail", location: "Vilankulo", description: "Handmade wooden sculptures, woven baskets, and beautiful tourist souvenirs.", image: "https://images.unsplash.com/photo-1531053270064-99837137f8f4?q=80&w=600&auto=format&fit=crop" },
  { id: 23, name: "Tete Smile Dental", category: "Health", location: "Tete", description: "Professional dental care, cleanings, and orthodontics for the whole family.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" },
  { id: 24, name: "Maputo Cleaning Pros", category: "Services", location: "Maputo", description: "Deep cleaning, office maintenance, and residential housekeeping services.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" },
  { id: 25, name: "Pemba Beach Bar", category: "Food & Drink", location: "Pemba", description: "Sunset cocktails, fresh juices, and grilled seafood right on the white sand beach.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
  { id: 26, name: "Nampula Cyber Cafe", category: "Tech", location: "Nampula", description: "High-speed internet access, printing services, and computer rentals.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
  { id: 27, name: "Xai-Xai Tailors", category: "Fashion", location: "Xai-Xai", description: "Expert alterations, custom suits, and bespoke wedding attire.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" },
  { id: 28, name: "Chimoio Builders Hardware", category: "Retail", location: "Chimoio", description: "Everything you need for DIY projects, home renovations, and construction.", image: "https://images.unsplash.com/photo-1541888046-281b3152069b?q=80&w=600&auto=format&fit=crop" },
  { id: 29, name: "Tofo Scuba Academy", category: "Services", location: "Tofo", description: "PADI certified scuba diving courses and thrilling whale shark safaris.", image: "https://images.unsplash.com/photo-1682685517565-d6d03f0b2401?q=80&w=600&auto=format&fit=crop" },
  { id: 30, name: "Quelimane Books & Supplies", category: "Retail", location: "Quelimane", description: "School textbooks, office stationery, and literature by African authors.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42c?q=80&w=600&auto=format&fit=crop" },
  { id: 31, name: "Gurué Mountain Yoga", category: "Health", location: "Gurué", description: "Peaceful yoga retreats, meditation classes, and holistic wellness workshops.", image: "https://images.unsplash.com/photo-1544367567045-46e53966c6c0?q=80&w=600&auto=format&fit=crop" },
  { id: 32, name: "Maputo Sky Drones", category: "Tech", location: "Maputo", description: "Professional aerial photography, videography, and land surveying services.", image: "https://images.unsplash.com/photo-1473968512647-3e447244097e?q=80&w=600&auto=format&fit=crop" },
  { id: 33, name: "Inhambane Coconut Stand", category: "Food & Drink", location: "Inhambane", description: "The freshest, sweetest coconut water hacked open right in front of you.", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop" },
  { id: 34, name: "Nacala Vision Center", category: "Health", location: "Nacala", description: "Eye exams, stylish prescription glasses, and UV protection sunglasses.", image: "https://i.pinimg.com/1200x/21/0c/5f/210c5f9c9d0e426094108624f3aa486b.jpg"},
  { id: 35, name: "Beira Leather Goods", category: "Fashion", location: "Beira", description: "Hand-stitched leather wallets, belts, and luxury travel bags.", image: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "Lichinga Cold Storage", category: "Services", location: "Lichinga", description: "Commercial refrigeration and frozen storage solutions for agricultural businesses.", image: "https://images.unsplash.com/photo-1585244342526-928e1262dcfd?q=80&w=600&auto=format&fit=crop" }
];

const categories = ['All', 'Retail', 'Services', 'Food & Drink', 'Fashion', 'Tech', 'Health'];

const testimonials = [
  { id: 1, name: "Ana Silva", role: "Local Shopper", text: "MozBiz makes it so incredibly easy to find reliable services in Maputo. I use it every week!" },
  { id: 2, name: "Carlos Tembe", role: "Small Business Owner", text: "Since listing my tech repair shop here, my customer base in Matola has doubled. Amazing platform." },
  { id: 3, name: "Elena Rosa", role: "Tourist", text: "Found the best surf shops and cafes in Tofo using this directory. Beautifully designed and easy to use." }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBusinesses = businesses.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || biz.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          <div className="space-x-8 text-sm font-semibold hidden md:block">
            <Link href="/" className="text-blue-800 border-b-2 border-orange-500 pb-1">Directory</Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-800 transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative bg-blue-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Empowering <span className="text-orange-400">Mozambique&apos;s</span> Economy
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-10 drop-shadow-md">
            Support our community by shopping local. Browse the largest directory of small businesses across the country.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex shadow-2xl border-4 border-white/20">
            <input 
              type="text" 
              placeholder="Search by name, city, or keyword..." 
              className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* UPDATED: Statistics Bar */}
      <div className="bg-orange-500 text-white py-8 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-400">
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black mb-1">35+</div>
            <div className="text-orange-100 font-medium uppercase tracking-widest text-sm">Verified Businesses</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black mb-1">15+</div>
            <div className="text-orange-100 font-medium uppercase tracking-widest text-sm">Cities Covered</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-4xl font-black mb-1">10k+</div>
            <div className="text-orange-100 font-medium uppercase tracking-widest text-sm">Monthly Users</div>
          </div>
        </div>
      </div>

      {/* Directory Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex-grow">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeCategory === category 
                  ? 'bg-blue-800 text-white hover:bg-blue-900' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Explore Directory</h2>
          <span className="text-sm font-bold text-orange-600 bg-orange-100 py-1 px-4 rounded-full shadow-inner">
            {filteredBusinesses.length} Results
          </span>
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((biz) => (
              <div key={biz.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100">
                <div className="h-48 w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-black text-white bg-blue-900/90 backdrop-blur-sm py-1.5 px-3 rounded-full uppercase tracking-widest shadow-sm">
                      {biz.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">{biz.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 font-semibold flex items-center gap-1">📍 {biz.location}</p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{biz.description}</p>
                  </div>
                  
                  <Link href="/contact" className="mt-6 inline-flex items-center text-blue-800 font-bold hover:text-orange-500 transition-colors group/btn text-sm border-t border-gray-100 pt-4">
                    Contact Business <span className="ml-2 group-hover/btn:translate-x-2 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No businesses found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter to find what you need.</p>
            <button onClick={() => {setSearchTerm(''); setActiveCategory('All');}} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-md">
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Loved by the Community</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Don&apos;t just take our word for it. See what locals are saying about MozBiz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-orange-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Never Miss a Local Deal</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">Subscribe to our newsletter to get updates on new businesses and exclusive local discounts delivered straight to your inbox.</p>
          
          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="px-6 py-4 rounded-full text-gray-800 w-full md:w-2/3 focus:outline-none focus:ring-4 focus:ring-orange-500/50" />
            <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors w-full md:w-auto">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">Moz<span className="text-orange-500">Biz</span></div>
        <p className="text-sm mb-2">© 2026 MozBiz Directory. All rights reserved.</p>
        <p className="text-xs text-gray-600">Built professionally for a homework assignment.</p>
      </footer>
    </main>
  );
}