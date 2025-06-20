import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main className=' p-16 flex flex-col justify-center items-center flex-1' >
      
         <h1 className='mb-8 text-4xl font-sans  font-black '>Our products</h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
