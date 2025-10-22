"use client"

import { motion } from "framer-motion"
import { Printer, Palette, Package, Wrench } from "lucide-react"

const services = [
  {
    title: "TINTS",
    icon: Printer,
    color: "bg-[var(--cyan)]",
    description: "Professional printing solutions",
  },
  {
    title: "CANVAS",
    icon: Palette,
    color: "bg-[var(--magenta)]",
    description: "High-quality canvas printing",
  },
  {
    title: "SPARE PARTS",
    icon: Package,
    color: "bg-[var(--yellow)]",
    description: "Genuine spare parts supply",
  },
  {
    title: "SERVICE",
    icon: Wrench,
    color: "bg-[var(--dark-gray)]",
    description: "Expert maintenance services",
  },
]

export default function ServiceCards() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.color} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mt-4">
                  <span className="text-2xl font-light">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
