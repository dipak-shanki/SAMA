import React from 'react';
import { Heart, Menu, Search, User } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">SAMA</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pharmacy">E-Pharmacy</Link>
            <Link href="/symptoms"><b>Symptom Checker</b></Link>
            <Link href="/articles">Health Articles</Link>
            <Link href="/doctors">Find Doctors</Link>
            <Link href="/doctors">Careers</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}