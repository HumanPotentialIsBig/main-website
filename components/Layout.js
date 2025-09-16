// --- components/Layout.js ---
import Link from 'next/link';

{/* Page Name Variables */}
export const ROUTES = {
  HOME: { name: "Home", path: "/" },
  ABOUT: { name: "About", path: "/about-me" },
  BLOG: { name: "Impulse", path: "/impulses" },
  PROJECTS: { name: "Projects", path: "/projects" },
  
};

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen font-sans text-gray-900">
        
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 -z-10"
        style={{ backgroundImage: "url('/images/Human-Potential-Tree-Symbolism.jpeg')" }}
      ></div>

      {/** Nav Bar */}    
      <nav className="w-full justify-evenly p-4 flex text-sm md:text-base gap-2 md:gap-6 shadow bg-white sticky top-0 z-10">
        
        <Link href="/" className="hidden md:flex font-extrabold text-xl md:text-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Human Potential Is Big
        </Link>
        
        <div className="space-x-4 text-gray-700">
          {/** <Link href={ROUTES.HOME.path} className="hover:text-yellow-400 transition">{ROUTES.HOME.name}</Link> */}
          <Link href={ROUTES.ABOUT.path} className="hover:text-yellow-400 transition">{ROUTES.ABOUT.name}</Link>
          <Link href={ROUTES.BLOG.path} className="hover:text-yellow-400 transition">{ROUTES.BLOG.name}</Link>
          <Link href={ROUTES.PROJECTS.path} className="hover:text-yellow-400 transition">{ROUTES.PROJECTS.name}</Link>
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
