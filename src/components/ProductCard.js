import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-[300px] h-[420px] border rounded-xl p-6 shadow overflow-hidden flex flex-col justify-between hover:shadow-lg ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[280px] object-cover rounded"
        />

        <div className="mt-4">
          <h2 className="text-lg font-bold line-clamp-1">{product.name}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>

        <p className="text-green-600 font-semibold mt-4">${product.price}</p>
      </div>
    </Link>
  );
}
