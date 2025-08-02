"use client";

import Link from "next/link";
import Image from "next/image";

const RefundPolicy = () => {
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
            Cancellation & Refund Policy
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Service Cancellation</h3>
                  <p className="leading-relaxed">
                    Clients may cancel services with 48 hours written notice. Cancellations after work has commenced will be charged for completed work and any third-party costs incurred.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Refund Eligibility</h3>
                  <p className="leading-relaxed">
                    <strong>Refunds are only available when we fail to deliver agreed-upon services despite prior notification and reasonable opportunity to correct the issue.</strong> Refunds apply only to the undelivered portion of services.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <p className="text-sm">
                      <strong>Important:</strong> Refunds are specifically limited to cases where our team fails to meet agreed deliverables after being notified of issues and given adequate time to resolve them.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Refund Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Written notice of service failure must be provided within 30 days of the agreed delivery date</li>
                    <li>We will have 14 days to address and resolve the issue</li>
                    <li>If the issue remains unresolved after our correction period, refund requests will be processed within 7-10 business days</li>
                    <li>Refunds will be issued to the original payment method</li>
                    <li>Partial refunds may apply based on work completed and delivered</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Non-Refundable Services</h3>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="leading-relaxed mb-3">
                      The following services and costs are <strong>non-refundable</strong>:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Completed work that meets agreed specifications</li>
                      <li>Third-party costs (domain registration, hosting, advertising spend, premium tools)</li>
                      <li>Consultation fees and strategy sessions</li>
                      <li>Work delivered within agreed timelines and specifications</li>
                      <li>Services where client has requested changes beyond original scope</li>
                      <li>Time-sensitive campaigns that have been launched</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Service Modifications</h3>
                  <p className="leading-relaxed">
                    If you need to modify your service requirements after project commencement, additional charges may apply. Significant scope changes may require a new agreement and payment terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Dispute Resolution</h3>
                  <p className="leading-relaxed">
                    We encourage open communication to resolve any concerns. If you&rsquo;re unsatisfied with our services, please contact us immediately so we can work together to find a solution before considering cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#121212]">Payment Terms</h3>
                  <p className="leading-relaxed">
                    Most projects require a deposit or milestone payments. Refunds, when applicable, will be calculated based on the payment schedule and work completed at the time of cancellation.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#121212]">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our cancellation and refund policy, please contact us:
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

export default RefundPolicy;
