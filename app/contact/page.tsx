"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Send, FileText, Ruler, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

const services = [
    { name: "Paper Trading", color: "cyan", icon: FileText },
    { name: "Printing Equipment", color: "magenta", icon: Phone },
    { name: "Binding Solutions", color: "yellow", icon: Mail },
    { name: "Packaging", color: "dark-gray", icon: Send },
]

const faqs = [
    {
        question: "What file types do you accept?",
        answer: "We accept PDF, AI, EPS, PSD, and other common design file formats for optimal print quality.",
        icon: FileText,
    },
    {
        question: "What are your standard sizes?",
        answer: "We offer A4, A3, A5, business cards, banners, and custom sizes tailored to your needs.",
        icon: Ruler,
    },
    {
        question: "What is your lead time?",
        answer: "Standard orders are completed within 3-7 business days. Rush orders are available upon request.",
        icon: Timer,
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="min-h-screen bg-white">
            <section className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/images/slide-2016-9-20-201-20-283-29.jpg"
                    alt="Contact Myanmar Print & Pack"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">Contact Us</h1>
                    <p className="text-xl text-white/90 max-w-2xl font-body">
                        Get in touch with our team to discuss your printing and packaging needs or request a quote.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Left Column - Contact Information */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-[var(--cyan)]/10 text-[var(--cyan)] rounded-full text-sm font-medium mb-4 font-sans">
                                Get In Touch
                            </div>
                            <h2 className="text-4xl font-bold mb-6 font-sans text-[var(--dark-gray)]">We'd Love to Hear From You</h2>
                            <p className="text-gray-700 mb-10 text-lg font-body leading-relaxed">
                                Whether you have a question about our services, want to request a quote, or are ready to start your
                                project, we're here to help.
                            </p>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-[var(--cyan)]/10 p-3 rounded-full mr-4 flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-[var(--cyan)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg font-sans text-[var(--dark-gray)]">Our Location</h3>
                                        <p className="text-gray-700 font-body">
                                            No. 123, Industrial Zone
                                            <br />
                                            Yangon, Myanmar 11011
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[var(--magenta)]/10 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Phone className="h-6 w-6 text-[var(--magenta)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg font-sans text-[var(--dark-gray)]">Phone Number</h3>
                                        <a
                                            href="tel:+959123456789"
                                            className="text-gray-700 font-body hover:text-[var(--magenta)] transition-colors block"
                                        >
                                            +95 9 123 456 789
                                        </a>
                                        <a
                                            href="tel:+959987654321"
                                            className="text-gray-700 font-body hover:text-[var(--magenta)] transition-colors block"
                                        >
                                            +95 9 987 654 321
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[var(--yellow)]/10 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Mail className="h-6 w-6 text-[var(--yellow)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg font-sans text-[var(--dark-gray)]">Email Address</h3>
                                        <a
                                            href="mailto:info@myanmarpp.com"
                                            className="text-gray-700 font-body hover:text-[var(--yellow)] transition-colors block"
                                        >
                                            info@myanmarpp.com
                                        </a>
                                        <a
                                            href="mailto:sales@myanmarpp.com"
                                            className="text-gray-700 font-body hover:text-[var(--yellow)] transition-colors block"
                                        >
                                            sales@myanmarpp.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[var(--dark-gray)]/10 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Clock className="h-6 w-6 text-[var(--dark-gray)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg font-sans text-[var(--dark-gray)]">Working Hours</h3>
                                        <p className="text-gray-700 font-body">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700 font-body">Saturday: 9:00 AM - 1:00 PM</p>
                                        <p className="text-gray-700 font-body">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold mb-6 font-sans text-[var(--dark-gray)]">Send Us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                                Your Name
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                                Email Address
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            Phone Number
                                        </label>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                                            placeholder="+95 9 123 456 789"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            Subject
                                        </label>
                                        <Input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
                                            placeholder="Project Inquiry"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                                            Your Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] resize-none"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-[var(--cyan)] hover:bg-[var(--cyan)]/90 text-white font-medium py-3 rounded-lg transition-all duration-300"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 font-sans text-[var(--dark-gray)]">Quick Contact by Service</h2>
                        <p className="text-gray-700 text-lg font-body">
                            Select a service category to quickly connect with our specialized team
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <button
                                    key={index}
                                    className="bg-white hover:shadow-lg border border-gray-200 transition-all duration-300 p-8 rounded-xl text-center group"
                                >
                                    <div
                                        className={`w-16 h-16 mx-auto mb-4 bg-[var(--${service.color})]/10 group-hover:bg-[var(--${service.color})] rounded-xl flex items-center justify-center transition-all duration-300`}
                                    >
                                        <Icon
                                            className={`w-8 h-8 text-[var(--${service.color})] group-hover:text-white transition-colors duration-300`}
                                        />
                                    </div>
                                    <p className="font-semibold text-[var(--dark-gray)] font-sans">{service.name}</p>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gray-200 h-[400px] rounded-2xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6348!2d96.1266!3d16.8066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzI0LjAiTiA5NsKwMDcnMzYuMCJF!5e0!3m2!1sen!2smm!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Myanmar Print & Pack Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-2 bg-[var(--cyan)]/10 text-[var(--cyan)] rounded-full text-sm font-medium mb-4 font-sans">
                            FAQ
                        </div>
                        <h2 className="text-4xl font-bold mb-6 font-sans text-[var(--dark-gray)]">Frequently Asked Questions</h2>
                        <p className="text-gray-700 text-lg font-body">
                            Find answers to common questions about our printing requirements and process.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {faqs.map((faq, index) => {
                                const Icon = faq.icon
                                return (
                                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-12 h-12 bg-[var(--cyan)]/10 rounded-lg flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-[var(--cyan)]" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 font-sans text-[var(--dark-gray)]">{faq.question}</h3>
                                        <p className="text-gray-700 font-body">{faq.answer}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-6 font-sans text-[var(--dark-gray)]">Follow Us</h3>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            className="w-14 h-14 bg-[var(--cyan)] hover:bg-[var(--cyan)]/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <Facebook className="w-7 h-7 text-white" />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="w-14 h-14 bg-[var(--cyan)] hover:bg-[var(--cyan)]/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin className="w-7 h-7 text-white" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
