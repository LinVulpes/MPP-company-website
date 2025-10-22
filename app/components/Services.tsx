"use client"

import { motion } from "framer-motion"
import { Award, Users, Truck, Leaf } from "lucide-react"

const services = [
  {
    icon: Award,
    title: "Quality Print",
    description: "We pride ourselves on providing high-quality printing services that meet the highest standards.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team of experts is always ready to help you with any questions or concerns you may have.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "We understand the importance of timely delivery and strive to get your orders to you as quickly as possible.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "We are committed to sustainability and use eco-friendly materials and processes whenever possible.",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--light-gray)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-dark)]">OUR SERVICES</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[var(--light-gray)] rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[var(--text-dark)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)]">{service.title}</h3>
              <p className="text-[var(--text-light)] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
