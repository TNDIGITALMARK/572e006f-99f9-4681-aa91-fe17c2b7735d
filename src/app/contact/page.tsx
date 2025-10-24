'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">Send us an email anytime</p>
              <a href="mailto:support@luxecasino.com" className="text-[#fbbf24] hover:text-[#d4af37] transition-colors">
                support@luxecasino.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">Call our support team</p>
              <a href="tel:+18005558393" className="text-[#fbbf24] hover:text-[#d4af37] transition-colors">
                +1 (800) 555-LUXE
              </a>
            </div>

            {/* Address */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="text-xl font-bold text-white">Address</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">Visit our office</p>
              <p className="text-white">
                123 Gaming Boulevard<br />
                Las Vegas, NV 89109<br />
                United States
              </p>
            </div>

            {/* Hours */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2d2d2d]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="text-xl font-bold text-white">Support Hours</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">We're available</p>
              <p className="text-white">
                24/7 - Always here to help<br />
                Live Chat Available
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2d2d2d]">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-500 font-semibold">Thank you! Your message has been sent successfully.</p>
                  <p className="text-green-500 text-sm mt-1">We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="account">Account Support</option>
                    <option value="payment">Payment Issues</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-[#0a0a0a] py-4 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-[#1a1a1a] rounded-lg p-8 border border-[#2d2d2d]">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">
                    How long does it take to process a withdrawal?
                  </h3>
                  <p className="text-gray-300">
                    Withdrawals are typically processed within 24-48 hours. Bank transfers may take an additional 3-5 business days to appear in your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">
                    Is my personal information secure?
                  </h3>
                  <p className="text-gray-300">
                    Yes, we use 256-bit SSL encryption to protect all data transmissions and maintain strict security protocols to safeguard your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-300">
                    We accept major credit cards, e-wallets, bank transfers, and cryptocurrency. Visit our Banking page for a complete list.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#fbbf24] mb-2">
                    How do I set responsible gaming limits?
                  </h3>
                  <p className="text-gray-300">
                    You can set deposit, loss, and time limits in your Account Dashboard under the Security settings. These limits help promote responsible gaming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
