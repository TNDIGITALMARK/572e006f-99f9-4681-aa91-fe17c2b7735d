'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2d2d2d] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Luxe Casino ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online casino services. Please read this privacy policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">2. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Name, email address, and contact information</li>
              <li>Date of birth and government-issued ID for age verification</li>
              <li>Address and proof of residence</li>
              <li>Payment information and financial data</li>
              <li>Username and password</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>IP address, browser type, and device information</li>
              <li>Gaming activity and transaction history</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Geolocation data (where permitted by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide, maintain, and improve our casino services</li>
              <li>Process your transactions and manage your account</li>
              <li>Verify your identity and age to comply with legal requirements</li>
              <li>Detect and prevent fraud, money laundering, and other illegal activities</li>
              <li>Send you promotional offers and communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Analyze usage patterns to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Third-party companies that help us operate our business, including payment processors, identity verification services, and customer support platforms.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Law enforcement, regulatory authorities, or other parties when required by law or to protect our rights, safety, and property.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Business Transfers</h3>
            <p className="text-gray-300 leading-relaxed">
              In connection with any merger, acquisition, or sale of company assets, your information may be transferred to the new owner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>256-bit SSL encryption for all data transmissions</li>
              <li>Secure servers with firewall protection</li>
              <li>Regular security audits and penetration testing</li>
              <li>Restricted access to personal data on a need-to-know basis</li>
              <li>Multi-factor authentication for sensitive operations</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Authenticate your login sessions</li>
              <li>Analyze site traffic and user behavior</li>
              <li>Provide targeted advertising (where permitted)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect your ability to use certain features of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
              <li><strong className="text-white">Portability:</strong> Request transfer of your data to another service</li>
              <li><strong className="text-white">Objection:</strong> Object to certain types of data processing</li>
              <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@luxecasino.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">8. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. After account closure, we may retain certain information for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>Compliance with legal and regulatory obligations (typically 5-7 years)</li>
              <li>Resolution of disputes and enforcement of agreements</li>
              <li>Fraud prevention and security purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">9. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 21 (or the legal gambling age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without proper consent, we will take steps to delete that information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">10. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">11. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">13. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#0a0a0a] rounded border border-[#2d2d2d]">
              <p className="text-white font-semibold mb-2">Privacy Officer</p>
              <p className="text-white">Email: privacy@luxecasino.com</p>
              <p className="text-white">Phone: +1 (800) 555-LUXE</p>
              <p className="text-white">Address: 123 Gaming Boulevard, Las Vegas, NV 89109</p>
            </div>
          </section>

          <div className="pt-8 border-t border-[#2d2d2d]">
            <p className="text-gray-400 text-sm">Last Updated: January 2025</p>
            <p className="text-gray-400 text-sm mt-2">
              By using Luxe Casino, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
