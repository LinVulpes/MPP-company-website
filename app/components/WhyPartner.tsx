"use client"

import { motion } from "framer-motion"

export default function WhyPartner() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/business-cards-and-branding-materials-mockup.jpg"
              alt="Business branding materials"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[var(--cyan)] font-semibold mb-3">Built for Your Success</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-dark)]">Why Partner with Us?</h2>
            <p className="text-[var(--text-light)] leading-relaxed mb-6">
              With years of experience and deep expertise in the industry, we bring innovative solutions and reliable
              service to every project. Our team is dedicated to helping your business succeed with cutting-edge
              technology and exceptional customer support.
            </p>
            <p className="text-[var(--text-light)] leading-relaxed">
              We are committed to delivering quality products and services that exceed your expectations and help you
              achieve your business goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
