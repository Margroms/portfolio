"use client";

import Link from "next/link";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Header */}
      <div className="sticky top-5 z-50 w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] bg-white rounded-[6px] mx-auto">
        <div className="flex items-center justify-between py-6 px-4 md:px-8">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={5000}
              height={5000}
              className="w-40"
            />
          </Link>
          <Link
            href="/"
            className="py-3 px-6 text-lg hover:bg-[#FFB982] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-4/5 2xl:w-[68%] mx-auto mt-10 pb-20">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#121212]">
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Information We Collect</h3>
                  <p className="leading-relaxed">
                    We collect information you provide directly (name, email, phone, business details) and automatically (website usage, cookies, analytics data) to improve our services and communication.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">How We Use Your Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our marketing services</li>
                    <li>Communicate about projects and updates</li>
                    <li>Send promotional materials (with consent)</li>
                    <li>Analyze website performance and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Information Sharing</h3>
                  <p className="leading-relaxed">
                    We do not sell or rent your personal information. We may share information with trusted service providers (hosting, analytics, payment processing) under strict confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Data Security</h3>
                  <p className="leading-relaxed">
                    We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Cookies and Tracking</h3>
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Third-Party Services</h3>
                  <p className="leading-relaxed">
                    Our website may contain links to third-party services (Google Analytics, social media platforms, payment processors). These services have their own privacy policies, and we are not responsible for their practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Data Retention</h3>
                  <p className="leading-relaxed">
                    We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Project-related data is typically retained for 7 years for business and legal purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Your Rights</h3>
                  <p className="leading-relaxed">
                    You have the right to access, update, or delete your personal information. You may also request data portability or object to certain processing activities. Contact us at <a href="mailto:contact@margros.com" className="text-[#FFB982] hover:underline">contact@margros.com</a> for any privacy-related requests.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Children&rsquo;s Privacy</h3>
                  <p className="leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Changes to Privacy Policy</h3>
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;last updated&quot; date.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#121212]">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:contact@margros.com" className="text-[#FFB982] hover:underline">contact@margros.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919663377473" className="text-[#FFB982] hover:underline">+91 9663377473</a></p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
