'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Crown, Star, Lock } from 'lucide-react';

export default function HomePage() {
  const games = [
    { id: 1, name: 'Blackjack Royale', image: '/generated/game-blackjack.png', category: 'Table Games' },
    { id: 2, name: 'Live Pro Roulette', image: '/generated/game-roulette.png', category: 'Live Casino' },
    { id: 3, name: 'Golden Empire Slots', image: '/generated/game-slots-empire.png', category: 'Slots', jackpot: '$125,847' },
    { id: 4, name: 'Diamond Deluxe Slots', image: '/generated/game-slots-diamond.png', category: 'Slots', jackpot: '$89,432' },
    { id: 5, name: 'Texas Hold\'em Poker', image: '/generated/game-poker.png', category: 'Poker' },
    { id: 6, name: 'Live Dealer Pro', image: '/generated/game-live-dealer.png', category: 'Live Casino' },
    { id: 7, name: 'Lucky 777 Slots', image: '/generated/game-slots-golden.png', category: 'Slots', jackpot: '$67,891' },
    { id: 8, name: 'VIP Blackjack', image: '/generated/game-blackjack.png', category: 'Table Games' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-[#fbbf24]">WHERE</span><br />
                <span className="text-[#fbbf24]">FORTUNE</span><br />
                <span className="text-white">AWAITS</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Experience the Thrill of Premium Gaming
              </p>
              <div className="flex gap-4">
                <button className="bg-[#dc2626] text-white px-8 py-3 rounded-md font-semibold hover:brightness-110 transition-all shadow-lg hover:shadow-xl">
                  PLAY NOW
                </button>
                <button className="bg-[#d4af37] text-[#0a0a0a] px-8 py-3 rounded-md font-semibold hover:brightness-110 transition-all shadow-lg hover:shadow-xl">
                  EXPLORE GAMES
                </button>
              </div>
            </div>

            {/* Right: Casino Imagery */}
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/generated/hero-casino-chips.png"
                alt="Casino chips and cards"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 pb-8">
          <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">FEATURED SERVICES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="game-card group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
                {game.jackpot && (
                  <div className="absolute top-3 right-3 bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {game.jackpot}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{game.name}</h3>
                <p className="text-gray-400 text-sm">{game.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">FEATURED SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* VIP Program */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 text-center hover:bg-[#222] transition-colors border border-[#2d2d2d]">
            <Crown className="w-16 h-16 text-[#d4af37] mx-auto mb-4" fill="#d4af37" />
            <h3 className="text-xl font-bold text-white mb-2">VIP PROGRAM</h3>
            <p className="text-gray-400 text-sm">
              Exclusive rewards and benefits for our most valued players
            </p>
          </div>

          {/* Daily Bonuses */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 text-center hover:bg-[#222] transition-colors border border-[#2d2d2d]">
            <Star className="w-16 h-16 text-[#d4af37] mx-auto mb-4" fill="#d4af37" />
            <h3 className="text-xl font-bold text-white mb-2">DAILY BONUSES</h3>
            <p className="text-gray-400 text-sm">
              Get rewarded every day with exciting bonus offers
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 text-center hover:bg-[#222] transition-colors border border-[#2d2d2d]">
            <Lock className="w-16 h-16 text-[#d4af37] mx-auto mb-4" fill="#d4af37" />
            <h3 className="text-xl font-bold text-white mb-2">SECURE TRANSACTIONS</h3>
            <p className="text-gray-400 text-sm">
              Your safety is our priority with encrypted payments
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
