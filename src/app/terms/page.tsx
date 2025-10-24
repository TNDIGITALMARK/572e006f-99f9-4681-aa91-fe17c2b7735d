'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>

        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2d2d2d] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Luxe Casino ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">2. Eligibility</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Be at least 21 years of age or the legal gambling age in your jurisdiction</li>
              <li>Not be located in a jurisdiction where online gambling is prohibited</li>
              <li>Not be on any self-exclusion or restricted persons list</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">3. Account Registration</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">4. Deposits and Withdrawals</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All financial transactions are subject to the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Minimum deposit amount: $10.00</li>
              <li>Minimum withdrawal amount: $20.00</li>
              <li>Withdrawals may take 3-5 business days to process</li>
              <li>Identity verification may be required before processing withdrawals</li>
              <li>All deposits and withdrawals are subject to our anti-money laundering policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">5. Game Rules and Fair Play</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All games operate according to published rules and payout tables. We use certified Random Number Generator (RNG) technology to ensure fair play. Any attempt to manipulate games or exploit system vulnerabilities will result in:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Immediate account suspension</li>
              <li>Forfeiture of all winnings</li>
              <li>Potential legal action</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">6. Responsible Gaming</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to responsible gaming practices. Players may:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Set deposit limits (daily, weekly, or monthly)</li>
              <li>Set session time limits</li>
              <li>Self-exclude for a specified period</li>
              <li>Access information about problem gambling support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">7. Bonuses and Promotions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All bonuses and promotions are subject to specific terms and conditions:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Bonuses may have wagering requirements</li>
              <li>Time limits may apply to bonus offers</li>
              <li>Game restrictions may apply</li>
              <li>Maximum bet limits may apply when using bonus funds</li>
              <li>We reserve the right to modify or cancel promotions at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">8. Account Closure and Suspension</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account if:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You breach these Terms and Conditions</li>
              <li>We suspect fraudulent activity</li>
              <li>You engage in abusive behavior toward staff or other players</li>
              <li>Required by law or regulatory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">9. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Luxe Casino and is protected by international copyright laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Luxe Casino shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the service. This includes but is not limited to losses from technical failures, interrupted service, or unauthorized access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Any disputes arising from these Terms shall be resolved through:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>First, direct communication with our customer support team</li>
              <li>If unresolved, mediation by an independent third party</li>
              <li>Final arbitration in accordance with applicable gaming regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">13. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
              <p className="text-white">Email: legal@luxecasino.com</p>
              <p className="text-white">Phone: +1 (800) 555-LUXE</p>
              <p className="text-white">Address: 123 Gaming Boulevard, Las Vegas, NV 89109</p>
            </div>
          </section>

          <div className="pt-8 border-t border-[#2d2d2d]">
            <p className="text-gray-400 text-sm">Last Updated: January 2025</p>
            <p className="text-gray-400 text-sm mt-2">
              By using Luxe Casino, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
