import Link from 'next/link';

// Our fake database of businesses
const businesses = [
  { id: 1, name: "Maputo Fresh Groceries", category: "Retail", location: "Maputo", description: "Fresh local produce delivered daily." },
  { id: 2, name: "Matola Tech Repair", category: "Services", location: "Matola", description: "Quick and affordable phone and laptop repairs." },
  { id: 3, name: "Beira Bite Cafe", category: "Food & Drink", location: "Beira", description: "The best coffee and pastries in the city." },
  { id: 4, name: "Nampula Textiles", category: "Fashion", location: "Nampula", description: "Handcrafted traditional capulanas and clothing." }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b pb-6">
          <h1 className="text-3xl font-bold text-blue-600">MozBiz Directory</h1>
          <nav className="space-x-6">
            <Link href="/about" className="text-blue-500 hover:text-blue-700 font-medium">About Us</Link>
          </nav>
        </header>

        <p className="text-lg mb-8">Support our community by shopping local. Browse our directory below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((biz) => (
            <div key={biz.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{biz.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-1">{biz.name}</h2>
              <p className="text-sm text-gray-500 mb-4 font-medium">📍 {biz.location}</p>
              <p className="text-gray-700">{biz.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}