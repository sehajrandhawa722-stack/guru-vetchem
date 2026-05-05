'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-end space-x-6">
          <span>Bulk enquiries:</span>
          <a href="tel:+917009408944" className="hover:text-green-400">+91 70094 08944</a>
          <span>|</span>
          <a href="mailto:info@guruvetchem.in" className="hover:text-green-400">info@guruvetchem.in</a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm">
            <img src="/logo-watermark.svg" alt="Guru Vetchem logo" className="w-10 h-10 opacity-90" />
          </div>
          <div>
            <p className="text-2xl font-bold text-green-800">Guru Vetchem</p>
            <p className="text-sm text-gray-500">Bulk Feed Inputs Partner</p>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-800">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-green-800">Products</Link>
          <Link href="/industries" className="text-gray-700 hover:text-green-800">Industries Served</Link>
          <Link href="/quality-documents" className="text-gray-700 hover:text-green-800">Quality & Documents</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-800">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-800">Contact</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-gray-700">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;