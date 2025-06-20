export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12 flex flex-1 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">AmrStore</h2>
          <p className="text-sm">© 2025 AmrStore. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>

      </div>
    </footer>
  );
}
