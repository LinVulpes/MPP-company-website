"use client";

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12"
        >
          <p className="text-gray-600 leading-tight text-xl font-body mb-8">
            Founded in 2016, <strong>Myanmar Print & Pack (MMP)</strong> is a leading public company providing
            integrated solutions across printing, packaging, and educational technology. We deliver exceptional value
            through our Intelligent Print Solutions, Ethical Trust Business Group, and Edu-Tech divisions, driving
            sustainable growth and innovation.
          </p>

          <div className="flex items-center gap-3 mt-8 cursor-pointer group">
            <span className="text-xl font-semibold text-gray-800 group-hover:text-[var(--light-blue)] transition-colors">
              Our Story
            </span>
            <ArrowRight className="w-5 h-5 group-hover:text-[var(--light-blue)] group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE — IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
              <div className="col-span-2 space-y-9 z-10 overflow-hidden">
                <Image
                  src="/images/canvas.png"
                  alt="Printing machinery"
                  width={500}
                  height={420}
                  className="w-[400px] h-[320px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="absolute top-64 -right-5 z-20">
                <Image
                  src="/images/digital-printing-services.png"
                  alt="PColor printing sample"
                  width={500}
                  height={420}
                  className="w-[400px] h-[320px] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>


          {/* Right Side — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <p className="text-gray-600 leading-tight text-xl font-body mb-8">
              We are a complete print and packaging solution provider, delivering professional,
              high-quality results from start to finished product.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">We Provide</h3>
              <div className="space-y-5">

                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">                    {/* Custom icon for Paper */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00BCD4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <line x1="8" y1="7" x2="16" y2="7" />
                      <line x1="8" y1="11" x2="16" y2="11" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 font-sans">
                      Importing and distributing premium papers
                    </p>
                    <p className="text-sm text-gray-600">
                      Woodfree, copy ivory boards for all packaging
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    {/* Custom ink bottle icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#E91E63"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect x="6" y="3" width="12" height="16" rx="2" />
                      <path d="M8 7h8" />
                      <path d="M8 11h8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Web offset and Sheetfed offset inks from leading international manufacturers
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    {/* Custom color wheel icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FFC107"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3v9l6 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Specializing in full-color printing for books, magazines, and promotional materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
