"use client"

import { motion } from "framer-motion"
import { ArrowRight, Printer, Package, Wrench } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/industrial-printing-press-machine.jpg"
                  alt="Printing machinery"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/cmyk-color-printing-samples.jpg"
                  alt="Color printing samples"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/modern-printing-equipment-close-up.jpg"
                  alt="Printing equipment"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[var(--text-light)] mb-6 leading-relaxed">
              Founded in 2016, Myanmar Print & Pack (MPP) is a leading public company providing integrated solutions
              across printing, packaging, and educational technology. We deliver exceptional value through our
              Intelligent Print Solutions, Ethical Trust Business Group, and Edu-Tech initiatives.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <ArrowRight className="text-[var(--cyan)] flex-shrink-0" />
              <p className="text-[var(--text-dark)] font-medium">Our Story</p>
            </div>

            <div className="bg-[var(--light-gray)] p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-dark)]">We Provide</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Printer className="w-6 h-6 text-[var(--cyan)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">Comprehensive printing solutions</p>
                    <p className="text-sm text-[var(--text-light)]">
                      From offset to digital, covering all your printing needs for all packaging
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Package className="w-6 h-6 text-[var(--magenta)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">
                      Wide offset and Sheetfed offset inks from leading international manufacturers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Wrench className="w-6 h-6 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">
                      Specializing in full-color printing for books, magazines, and various promotion materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
