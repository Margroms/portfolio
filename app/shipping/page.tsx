"use client";

import Link from "next/link";
import Image from "next/image";

const ShippingPolicy = () => {
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
            Shipping & Delivery
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Digital Service Delivery</h3>
                  <p className="leading-relaxed">
                    Our services are primarily digital and delivered electronically through email, cloud platforms, or direct website deployment. No physical shipping is required for most services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Delivery Timelines</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Website Design & Development:</strong> 2-4 weeks depending on complexity</li>
                      <li><strong>SEO Setup & Strategy:</strong> 1-2 weeks for initial implementation</li>
                      <li><strong>Content Creation:</strong> 1-2 weeks for initial batch</li>
                      <li><strong>Social Media Setup:</strong> 3-5 business days</li>
                      <li><strong>Email Marketing Setup:</strong> 3-5 business days</li>
                      <li><strong>PPC Campaign Setup:</strong> 5-7 business days</li>
                    </ul>
                  </div>
                  <p className="text-sm mt-3 text-gray-600">
                    *Timelines may vary based on project complexity, client responsiveness, and scope of work.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Delivery Method</h3>
                  <p className="leading-relaxed">
                    Final deliverables are provided through:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Secure cloud sharing platforms (Google Drive, Dropbox)</li>
                    <li>Email with downloadable attachments</li>
                    <li>Direct access to completed websites and campaigns</li>
                    <li>Login credentials and access instructions upon completion</li>
                    <li>Live demonstrations and training sessions (when applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Project Milestones</h3>
                  <p className="leading-relaxed">
                    For larger projects, we deliver work in phases:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Initial Consultation:</strong> Within 24-48 hours of booking</li>
                    <li><strong>Strategy & Planning:</strong> 3-5 business days</li>
                    <li><strong>Design Mockups:</strong> 5-7 business days</li>
                    <li><strong>Development Phase:</strong> 1-3 weeks depending on scope</li>
                    <li><strong>Testing & Launch:</strong> 2-3 business days</li>
                    <li><strong>Final Delivery:</strong> Same day as launch approval</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Physical Materials (If Applicable)</h3>
                  <p className="leading-relaxed">
                    For any physical marketing materials (business cards, brochures, promotional items):
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Delivery arranged through trusted local vendors or shipping partners</li>
                    <li>Delivery costs and timelines communicated separately</li>
                    <li>Standard shipping: 5-7 business days within India</li>
                    <li>Express shipping: 2-3 business days (additional charges apply)</li>
                    <li>International shipping: 10-15 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Support & Maintenance</h3>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <p className="leading-relaxed">
                      Ongoing support and maintenance services are delivered continuously during the service period:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong>Emergency support:</strong> Within 24 hours</li>
                      <li><strong>Regular updates:</strong> Weekly or monthly as agreed</li>
                      <li><strong>Monthly reports:</strong> Delivered by the 5th of each month</li>
                      <li><strong>Optimization updates:</strong> Ongoing as needed</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Client Responsibilities</h3>
                  <p className="leading-relaxed">
                    To ensure timely delivery, clients must provide:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Required content, images, and materials within 48 hours of request</li>
                    <li>Feedback and approvals within agreed timeframes</li>
                    <li>Access to necessary accounts and platforms</li>
                    <li>Clear communication of requirements and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Delivery Confirmation</h3>
                  <p className="leading-relaxed">
                    All deliveries require client confirmation. We provide detailed handover documentation and are available for questions during the first 48 hours after delivery at no additional cost.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#121212]">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our delivery process, please contact us:
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

export default ShippingPolicy;
