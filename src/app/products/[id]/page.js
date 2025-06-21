
import { products } from '@/lib/products';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';

export default function ProductDetails({ params }) {
  const product = products.find(p => p.id === params.id);

 if (!product) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">Product Not Found</h2>
      <p className="text-gray-700 mb-6 text-center px-2 sm:px-0">
        Sorry, the product you are looking for does not exist or has been removed.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}

  return (
    <div className="p-8 flex    flex-col md:flex-row gap-16">
      <image
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-[550px] object-cover object-[center_58%]   rounded-xl shadow"
      />
      <div className="flex-1 space-y-6 pl-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-lg">{product.description}</p>
        <p className="text-green-600 text-2xl font-semibold">${product.price}</p>
        
      <AddToCartButton product={product} />
      </div>
        <div className='flex-[1.5] pl-16  space-y-3'>
          <div className='w-[250px]'>
          <h3 className="text-2xl font-semibold mb-2  ">Features</h3>
        <ul className="list-disc list-inside space-y-1">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
         </div>
         <div>
            <h3 className="text-2xl font-semibold  mb-2  ">Usges</h3>
            <p className="w-[250px]  ">{product.usage}</p>
         </div>
          <div className=''>
            <h3 className="text-2xl font-semibold mt-4 mb-2">Notes</h3>
            <p className='w-[25]'>{product.notes}</p>
         </div>
         
        </div>
    </div>
  );
}
