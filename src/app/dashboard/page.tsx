'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Wallet, History, Shield, Award, Settings } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const transactions = [
    { id: 1, type: 'Deposit', amount: '+$500.00', date: '2025-01-20', method: 'Credit Card', status: 'Completed' },
    { id: 2, type: 'Win', amount: '+$150.00', date: '2025-01-19', method: 'Blackjack', status: 'Completed' },
    { id: 3, type: 'Withdrawal', amount: '-$200.00', date: '2025-01-18', method: 'Bank Transfer', status: 'Processing' },
    { id: 4, type: 'Bet', amount: '-$25.00', date: '2025-01-18', method: 'Roulette', status: 'Completed' },
    { id: 5, type: 'Deposit', amount: '+$300.00', date: '2025-01-17', method: 'E-Wallet', status: 'Completed' },
  ];

  const gameHistory = [
    { game: 'Lucky 777 Slots', played: '2 hours ago', won: '+$150', result: 'win' },
    { game: 'Blackjack Royale', played: '5 hours ago', won: '-$25', result: 'loss' },
    { game: 'Live Roulette', played: '1 day ago', won: '+$75', result: 'win' },
    { game: 'Texas Hold\'em', played: '2 days ago', won: '+$200', result: 'win' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Account Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2d2d2d] space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'overview' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('wallet')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'wallet' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <Wallet className="w-5 h-5" />
                <span>Wallet</span>
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'history' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <History className="w-5 h-5" />
                <span>History</span>
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'security' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Security</span>
              </button>
              <button
                onClick={() => setActiveTab('rewards')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'rewards' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <Award className="w-5 h-5" />
                <span>Rewards</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  activeTab === 'settings' ? 'bg-[#d4af37] text-[#0a0a0a] font-semibold' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === 'overview' && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                    <p className="text-gray-400 text-sm mb-2">Account Balance</p>
                    <p className="text-3xl font-bold text-[#fbbf24]">$1,250.00</p>
                    <p className="text-green-500 text-sm mt-2">+15.3% this month</p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                    <p className="text-gray-400 text-sm mb-2">Total Winnings</p>
                    <p className="text-3xl font-bold text-white">$3,450.00</p>
                    <p className="text-green-500 text-sm mt-2">+8.7% vs last week</p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                    <p className="text-gray-400 text-sm mb-2">Loyalty Points</p>
                    <p className="text-3xl font-bold text-[#d4af37]">2,847</p>
                    <p className="text-gray-400 text-sm mt-2">Gold Tier Member</p>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                  <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-400 text-sm">Full Name</label>
                      <p className="text-white font-semibold mt-1">John Anderson</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Email</label>
                      <p className="text-white font-semibold mt-1">john.anderson@email.com</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Account Status</label>
                      <p className="text-green-500 font-semibold mt-1">Verified ✓</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Member Since</label>
                      <p className="text-white font-semibold mt-1">January 2024</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                  <h2 className="text-2xl font-bold text-white mb-6">Recent Game Sessions</h2>
                  <div className="space-y-4">
                    {gameHistory.map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
                        <div>
                          <p className="text-white font-semibold">{session.game}</p>
                          <p className="text-gray-400 text-sm">{session.played}</p>
                        </div>
                        <div className={`text-right font-bold ${session.result === 'win' ? 'text-green-500' : 'text-red-500'}`}>
                          {session.won}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'wallet' && (
              <>
                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                  <h2 className="text-2xl font-bold text-white mb-6">Wallet Management</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <button className="bg-[#d4af37] text-[#0a0a0a] py-4 rounded-lg font-bold hover:brightness-110 transition-all">
                      Deposit Funds
                    </button>
                    <button className="bg-[#dc2626] text-white py-4 rounded-lg font-bold hover:brightness-110 transition-all">
                      Withdraw Funds
                    </button>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                  <h2 className="text-2xl font-bold text-white mb-6">Transaction History</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#2d2d2d]">
                          <th className="text-left text-gray-400 py-3">Type</th>
                          <th className="text-left text-gray-400 py-3">Amount</th>
                          <th className="text-left text-gray-400 py-3">Date</th>
                          <th className="text-left text-gray-400 py-3">Method</th>
                          <th className="text-left text-gray-400 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="border-b border-[#2d2d2d]">
                            <td className="py-4 text-white">{tx.type}</td>
                            <td className={`py-4 font-semibold ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                              {tx.amount}
                            </td>
                            <td className="py-4 text-gray-400">{tx.date}</td>
                            <td className="py-4 text-gray-400">{tx.method}</td>
                            <td className="py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                tx.status === 'Completed' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                              }`}>
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'history' && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                <h2 className="text-2xl font-bold text-white mb-6">Complete Game History</h2>
                <div className="space-y-4">
                  {gameHistory.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
                      <div>
                        <p className="text-white font-semibold">{session.game}</p>
                        <p className="text-gray-400 text-sm">{session.played}</p>
                      </div>
                      <div className={`text-right font-bold ${session.result === 'win' ? 'text-green-500' : 'text-red-500'}`}>
                        {session.won}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Two-Factor Authentication</h3>
                    <p className="text-gray-400 text-sm mb-3">Add an extra layer of security to your account</p>
                    <button className="bg-[#d4af37] text-[#0a0a0a] px-6 py-2 rounded font-semibold hover:brightness-110 transition-all">
                      Enable 2FA
                    </button>
                  </div>
                  <div className="border-t border-[#2d2d2d] pt-6">
                    <h3 className="text-white font-semibold mb-3">Change Password</h3>
                    <button className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-6 py-2 rounded font-semibold hover:bg-[#2d2d2d] transition-colors">
                      Update Password
                    </button>
                  </div>
                  <div className="border-t border-[#2d2d2d] pt-6">
                    <h3 className="text-white font-semibold mb-3">Responsible Gaming Limits</h3>
                    <p className="text-gray-400 text-sm mb-3">Set daily, weekly, or monthly deposit limits</p>
                    <button className="bg-[#1a1a1a] border border-[#2d2d2d] text-white px-6 py-2 rounded font-semibold hover:bg-[#2d2d2d] transition-colors">
                      Manage Limits
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                <h2 className="text-2xl font-bold text-white mb-6">Loyalty Rewards</h2>
                <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941e] rounded-lg p-6 mb-6">
                  <p className="text-[#0a0a0a] font-semibold mb-2">Current Tier</p>
                  <p className="text-4xl font-bold text-[#0a0a0a] mb-2">Gold Member</p>
                  <p className="text-[#0a0a0a]">2,847 Points | 153 points to Platinum</p>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">Welcome Bonus</p>
                        <p className="text-gray-400 text-sm">Claimed</p>
                      </div>
                      <span className="text-green-500 font-semibold">✓ Complete</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">Daily Login Bonus</p>
                        <p className="text-gray-400 text-sm">Available</p>
                      </div>
                      <button className="bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded font-semibold hover:brightness-110 transition-all">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
                <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">Language</label>
                    <select className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white font-semibold block mb-2">Currency</label>
                    <select className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Email Notifications</p>
                      <p className="text-gray-400 text-sm">Receive updates about promotions and wins</p>
                    </div>
                    <button className="bg-[#d4af37] px-6 py-2 rounded font-semibold text-[#0a0a0a]">
                      ON
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
