import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 bg-white shadow-2xl flex justify-between items-center  sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        AmrStore
      </Link>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
       <Link href="/cart" className="text-blue-600 hover:underline">
  🛒 View Cart
    
</Link>
      </div>
    </nav>
  );
}
