"use client";

import Link from "next/link";
import Image from "next/image";

const TermsAndConditions = () => {
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
            Terms of Service
          </h1>
          
          <div className="prose max-w-none">
            {/* Terms of Service */}
            <section className="mb-12">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">1. Service Agreement</h3>
                  <p className="leading-relaxed">
                    By engaging our services, you agree to these terms and conditions. Our restaurant marketing services include web design & development, SEO, content creation, social media marketing, email marketing, and PPC advertising specifically tailored for restaurants and food businesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">2. Service Delivery</h3>
                  <p className="leading-relaxed">
                    We commit to delivering high-quality marketing services within agreed timelines. Project timelines will be communicated during the initial consultation and may vary based on project complexity and scope.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">3. Client Responsibilities</h3>
                  <p className="leading-relaxed">
                    Clients must provide necessary materials (logos, images, content, access credentials) and feedback within reasonable timeframes to ensure project success. Delays in client response may affect project timelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">4. Payment Terms</h3>
                  <p className="leading-relaxed">
                    Payment terms will be outlined in individual service agreements. Most projects require a deposit before work commences, with remaining payments due upon milestone completion or project delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">5. Intellectual Property</h3>
                  <p className="leading-relaxed">
                    Upon full payment, clients own the final deliverables. However, we retain the right to showcase completed work in our portfolio. Any third-party tools, templates, or frameworks used remain property of their respective owners.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">6. Service Modifications</h3>
                  <p className="leading-relaxed">
                    Changes to project scope after commencement may result in additional charges and timeline adjustments. All modifications must be agreed upon in writing by both parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">7. Limitation of Liability</h3>
                  <p className="leading-relaxed">
                    Our liability is limited to the amount paid for services. We are not responsible for indirect damages, loss of revenue, or business interruption. Marketing results may vary and are not guaranteed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">8. Termination</h3>
                  <p className="leading-relaxed">
                    Either party may terminate services with appropriate notice as outlined in individual service agreements. Termination does not relieve payment obligations for work completed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">9. Governing Law</h3>
                  <p className="leading-relaxed">
                    These terms are governed by the laws of India. Any disputes will be resolved through negotiation or, if necessary, through appropriate legal channels in Indian jurisdiction.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#121212]">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these terms of service, please contact us:
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

export default TermsAndConditions;
