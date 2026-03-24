import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          <div className="space-x-8 text-sm font-semibold flex items-center">
            <Link href="/" className="text-gray-500 hover:text-blue-800 transition-colors">Directory</Link>
            <Link href="/about" className="text-blue-800 border-b-2 border-orange-500 pb-1">About Us</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Stunning Image Side */}
          <div className="md:w-1/2 h-80 md:h-auto relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <div className="text-5xl mb-6">🇲🇿</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Mission</h1>
            
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              MozBiz was created with a single goal: to empower the local economy. We help connect citizens and tourists with incredible small businesses across Maputo, Beira, Nampula, and beyond. 
            </p>

            <p className="text-lg mb-10 text-gray-600 leading-relaxed">
              By shopping local, we strengthen our communities, create jobs, and build a better future for Mozambique.
            </p>

            <div>
              <Link href="/" className="inline-flex items-center justify-center bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 shadow-lg hover:-translate-y-1 transition-all duration-300">
                Explore the Directory &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center mt-auto">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">Moz<span className="text-orange-500">Biz</span></div>
        <p className="text-sm">© 2026 MozBiz Directory. Built professionally for class.</p>
      </footer>
    </main>
  );
}