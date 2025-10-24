"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 font-[Raleway]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2016, <strong>Myanmar Print & Pack (MMP)</strong> is a leading
              public company providing integrated solutions across printing,
              packaging, and educational technology. We deliver exceptional value
              through our Intelligent Print Solutions, Ethical Trust Business
              Group, and Edu-Tech divisions, driving sustainable growth and innovation.
            </p>

            <div className="flex items-center gap-3 mb-8 cursor-pointer group">
              <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                Our Story
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">We Provide</h3>
              <div className="space-y-5">

                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                    {/* Custom icon for Paper */}
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
                    <p className="font-medium text-gray-900">
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

          {/* Right Side — Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* Top Image */}
            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/industrial-printing-press-machine.jpg"
                alt="Printing machine"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlapping Bottom Image */}
            <div className="absolute -bottom-12 -left-10 w-3/4 rounded-lg overflow-hidden shadow-md z-10 hidden md:block">
              <Image
                src="/cmyk-color-printing-samples.jpg"
                alt="Color printing sample"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
