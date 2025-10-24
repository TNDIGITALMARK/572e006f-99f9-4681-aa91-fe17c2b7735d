'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Volume2, Settings, Maximize } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GamePage() {
  const [balance, setBalance] = useState(1250.00);
  const [betAmount, setBetAmount] = useState(10);
  const [gameHistory, setGameHistory] = useState([
    { round: 5, result: 'Win', amount: '+$50' },
    { round: 4, result: 'Loss', amount: '-$10' },
    { round: 3, result: 'Win', amount: '+$25' },
    { round: 2, result: 'Win', amount: '+$30' },
  ]);

  const handleBet = (multiplier: number) => {
    setBetAmount(betAmount * multiplier);
  };

  const handlePlay = () => {
    // Simulate game play
    const win = Math.random() > 0.5;
    const amount = win ? betAmount * 2 : -betAmount;

    setBalance(balance + amount);
    setGameHistory([
      { round: gameHistory.length + 1, result: win ? 'Win' : 'Loss', amount: win ? `+$${betAmount * 2}` : `-$${betAmount}` },
      ...gameHistory.slice(0, 3)
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Lobby</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2d2d2d]">
              {/* Game Header */}
              <div className="bg-[#0a0a0a] p-4 flex items-center justify-between border-b border-[#2d2d2d]">
                <h2 className="text-xl font-bold text-white">Lucky 777 Slots</h2>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-[#1a1a1a] rounded transition-colors">
                    <Volume2 className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-[#1a1a1a] rounded transition-colors">
                    <Settings className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-[#1a1a1a] rounded transition-colors">
                    <Maximize className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Game Canvas */}
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                <Image
                  src="/generated/game-slots-golden.png"
                  alt="Slot Game"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="bg-[#d4af37] text-[#0a0a0a] px-12 py-4 rounded-lg font-bold text-xl hover:brightness-110 transition-all shadow-xl"
                  >
                    SPIN
                  </button>
                </div>
              </div>

              {/* Game Controls */}
              <div className="p-6 bg-[#0a0a0a] border-t border-[#2d2d2d]">
                <div className="grid grid-cols-2 gap-6">
                  {/* Bet Amount */}
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Bet Amount</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={betAmount}
                        onChange={(e) => setBetAmount(Number(e.target.value))}
                        className="flex-1 bg-[#1a1a1a] border border-[#2d2d2d] rounded px-4 py-3 text-white font-bold text-lg focus:outline-none focus:border-[#d4af37]"
                      />
                      <button
                        onClick={() => handleBet(0.5)}
                        className="bg-[#1a1a1a] border border-[#2d2d2d] px-4 py-3 rounded text-white font-semibold hover:bg-[#2d2d2d] transition-colors"
                      >
                        1/2
                      </button>
                      <button
                        onClick={() => handleBet(2)}
                        className="bg-[#1a1a1a] border border-[#2d2d2d] px-4 py-3 rounded text-white font-semibold hover:bg-[#2d2d2d] transition-colors"
                      >
                        2×
                      </button>
                      <button
                        onClick={() => setBetAmount(100)}
                        className="bg-[#dc2626] px-4 py-3 rounded text-white font-semibold hover:brightness-110 transition-all"
                      >
                        MAX
                      </button>
                    </div>
                  </div>

                  {/* Balance */}
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Balance</label>
                    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded px-4 py-3">
                      <span className="text-[#fbbf24] font-bold text-2xl">${balance.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <button className="bg-[#1a1a1a] border border-[#2d2d2d] py-3 rounded text-white font-semibold hover:bg-[#2d2d2d] transition-colors">
                    Auto Play
                  </button>
                  <button className="bg-[#d4af37] py-3 rounded text-[#0a0a0a] font-bold hover:brightness-110 transition-all shadow-lg">
                    SPIN
                  </button>
                  <button className="bg-[#1a1a1a] border border-[#2d2d2d] py-3 rounded text-white font-semibold hover:bg-[#2d2d2d] transition-colors">
                    Turbo Mode
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Info */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <h3 className="text-xl font-bold text-white mb-4">Game Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">RTP</span>
                  <span className="text-white font-semibold">96.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Win</span>
                  <span className="text-[#fbbf24] font-semibold">10,000×</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Volatility</span>
                  <span className="text-white font-semibold">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Bet</span>
                  <span className="text-white font-semibold">$0.10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Bet</span>
                  <span className="text-white font-semibold">$100</span>
                </div>
              </div>
            </div>

            {/* Game History */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <h3 className="text-xl font-bold text-white mb-4">Recent History</h3>
              <div className="space-y-3">
                {gameHistory.map((entry, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[#2d2d2d] last:border-0">
                    <div>
                      <span className="text-gray-400 text-sm">Round #{entry.round}</span>
                      <p className={`font-semibold ${entry.result === 'Win' ? 'text-green-500' : 'text-red-500'}`}>
                        {entry.result}
                      </p>
                    </div>
                    <span className={`font-bold ${entry.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {entry.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jackpot Info */}
            <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941e] rounded-lg p-6 text-center">
              <p className="text-[#0a0a0a] font-semibold mb-2">Current Jackpot</p>
              <p className="text-4xl font-bold text-[#0a0a0a]">$125,847</p>
              <p className="text-[#0a0a0a] text-sm mt-2">Last won 3 days ago</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
