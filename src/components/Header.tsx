'use client';

import Link from 'next/link';
import { Crown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#1a1a1a] border-b border-[#2d2d2d] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-[#d4af37]" fill="#d4af37" />
            <span className="logo-text text-xl text-white">LUXE CASINO</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Home
            </Link>
            <Link href="/games" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Games
            </Link>
            <Link href="/table-games" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Table Games
            </Link>
            <Link href="/promotions" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Promotions
            </Link>
            <Link href="/security" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Security & Conditions
            </Link>
            <Link href="/privacy" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white hover:text-[#fbbf24] transition-colors font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-[#d4af37] text-[#0a0a0a] px-6 py-2 rounded-md font-semibold hover:brightness-110 transition-all">
              LOGIN
            </button>
            <button className="bg-[#dc2626] text-white px-6 py-2 rounded-md font-semibold hover:brightness-110 transition-all">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
