import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          <div className="space-x-8 text-sm font-semibold flex items-center">
            <Link href="/" className="text-gray-500 hover:text-blue-800 transition-colors">Directory</Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-800 transition-colors">About Us</Link>
            <Link href="/contact" className="text-blue-800 border-b-2 border-orange-500 pb-1">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contact Form Section */}
      <div className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side - Info */}
          <div className="bg-blue-900 text-white p-10 md:w-2/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Get in Touch</h2>
              <p className="text-blue-100 mb-8 font-light">Want to list your business or have a question? Drop us a message.</p>
              <div className="space-y-4 text-sm font-medium text-blue-100">
                <p className="flex items-center gap-3"><span>📍</span> Maputo, Mozambique</p>
                <p className="flex items-center gap-3"><span>📧</span> hello@mozbiz.com</p>
                <p className="flex items-center gap-3"><span>📞</span> +258 84 123 4567</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-10 md:w-3/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <p className="text-sm">© 2026 MozBiz Directory. Built professionally for class.</p>
      </footer>
    </main>
  );
}