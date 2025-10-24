"use client"

import { motion } from "framer-motion"
import { Palette, Package, Wrench } from "lucide-react"
import { GrPaint } from "react-icons/gr";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi"

const services = [
  {
    title: "TINTS",
    icon: GrPaint,
    color: "bg-[var(--light-blue)]",
    description: "Professional printing solutions",
  },
  {
    title: "PRINT",
    icon: BsFillPrinterFill,
    color: "bg-[var(--magenta)]",
    description: "High-quality canvas printing",
  },
  {
    title: "PACKAGE",
    icon: Package,
    color: "bg-[var(--yellow)]",
    description: "Genuine spare parts supply",
  },
  {
    title: "SERVICE",
    icon: MdMiscellaneousServices,
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
              className={`${service.color} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group service-card`}
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="mt-4">
                  <FiPlusCircle className="w-8 h-8 plus-icon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
