"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a page route (starts with / but not #), let Next.js handle it
    if (href.startsWith("/") && !href.includes("#")) {
      setIsOpen(false)
      return
    }

    // Handle hash links
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.slice(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const yOffset = -80
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-20 overflow-visible">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 overflow-visible">
            <img
              src="/logo.png"
              alt="Myanmar Print & Pack logo"
              className="w-32 h-32"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault()
                        const targetId = item.href.slice(1)
                        const targetElement = document.getElementById(targetId)
                        if (targetElement) {
                          const yOffset = -80
                          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                          window.scrollTo({ top: y, behavior: "smooth" })
                        }
                      }
                      setIsOpen(false)
                    }}
                    className={`relative text-[var(--text-dark)] px-3 py-2 text-[16px] font-medium transition-colors ${isActive ? "text-[var(--dark-blue)]" : "hover:text-[var(--dark-blue)]"
                      }`}
                  >
                    <span
                      className={`inline-block transition-transform ${isActive
                          ? "scale-110 text-[18px] font-bold"
                          : "hover:scale-105 hover:text-[16px] hover:font-bold"
                        }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Contact Us Button */}
            <button className="group flex items-center gap-2 bg-[#062B44] text-white px-6 py-3 rounded-[12px] hover:bg-[#094067] transition-all shadow-sm">
              Contact Us <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-dark)] hover:text-[var(--dark-blue)] focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-[var(--text-dark)] hover:text-[var(--cyan)] px-3 py-2 rounded-md text-base font-medium 
      transition-all duration-300 hover:scale-105 ${pathname === item.href ? "text-[var(--cyan)] font-bold" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full btn btn-primary mt-4">
              CONTACT US
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
