// --- components/Layout.js ---
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen font-sans text-gray-900">
        
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 -z-10"
        style={{ backgroundImage: "url('/images/Human-Potential-Tree-Symbolism.jpeg')" }}
      ></div>

      {/** Nav Bar */}    
      <nav className="p-4 flex justify-between items-center shadow bg-white sticky top-0 z-10">
        <Link href="/" className="font-extrabold text-xl md:text-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Human Potential Is Big
        </Link>
        <div className="space-x-4 text-gray-700">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/blog" className="hover:text-yellow-400 transition">Blog</Link>
          <Link href="/projects" className="hover:text-yellow-400 transition">Projects</Link>
        </div>
      </nav>

      {/** Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/** Footer */}
      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Human Potential Is Big
      </footer>
    </div>
  );
}
