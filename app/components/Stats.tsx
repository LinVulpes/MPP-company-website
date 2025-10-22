"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "300",
    suffix: "+",
    label: "Satisfied clients",
    sublabel: "across printing, packaging and educational technology",
  },
  {
    number: "10",
    suffix: "+",
    label: "Outstanding quality products",
    sublabel: "since 2016",
  },
  {
    number: "500",
    suffix: "+",
    label: "Employees",
    sublabel: "dedicated to providing storage and packaging",
  },
]

export default function Stats() {
  return (
    <section className="section-padding bg-[var(--dark-gray)] text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
                <span className="text-[var(--cyan)]">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-white/70 text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
