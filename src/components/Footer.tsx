'use client';

import Link from 'next/link';
import { Crown, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2d2d2d] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-[#d4af37]" fill="#d4af37" />
              <span className="logo-text text-xl text-white">LUXE CASINO</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Where fortune awaits. Experience the thrill of premium casino gaming.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Responsible Gambling
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/cash-policy" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Cash Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#fbbf24] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#0a0a0a] border border-[#2d2d2d] rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
              />
              <button className="bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded font-semibold hover:brightness-110 transition-all">
                →
              </button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d2d2d] mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 LUXE CASINO. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
