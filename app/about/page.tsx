import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">About MozBiz Directory</h1>
        
        <p className="text-lg mb-4">
          This platform was created to help connect citizens with local small businesses across Maputo and beyond. 
          By shopping local, we strengthen our community and local economy.
        </p>
        
        <p className="text-lg mb-8">
          This project was built using <strong>Next.js</strong> for my homework assignment.
        </p>

        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
          &larr; Back to Directory
        </Link>
      </div>
    </main>
  );
}