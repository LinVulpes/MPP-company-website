"use client"

import { motion } from "framer-motion"

const groups = [
  {
    title: "Intelligent print solutions for modern businesses",
    image: "/modern-printing-technology-digital-press.jpg",
    description: "Cutting-edge printing technology for the digital age",
  },
  {
    title: "Business solutions with integrity",
    image: "/business-meeting-professional-handshake.jpg",
    description: "Trusted partnerships built on ethical practices",
  },
  {
    title: "Modern educational technology solutions",
    image: "/classroom-tablets.png",
    description: "Innovative learning tools for the future",
  },
]

export default function BusinessGroups() {
  return (
    <section id="portfolio" className="section-padding bg-[var(--light-gray)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-dark)]">Our core business groups</h2>
          <p className="text-[var(--text-light)] max-w-3xl mx-auto">
            Delivering tailored solutions across printing, packaging, and educational technologies designed to meet your
            business needs with precision and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-96"
            >
              <img
                src={group.image || "/placeholder.svg"}
                alt={group.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">{group.title}</h3>
                <p className="text-white/80 text-sm">{group.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
