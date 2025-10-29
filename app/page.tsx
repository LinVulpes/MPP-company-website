import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ServiceCards from "./components/ServiceCards"
import About from "./components/About"
import Services from "./components/Services"
import Stats from "./components/Stats"
import WhyPartner from "./components/WhyPartner"
import LatestNews from "./components/LatestNews"
import BusinessGroups from "./components/BusinessGroups"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServiceCards />
      <About />
      <Services />
      <Stats />
      <WhyPartner />
      <BusinessGroups />
      <LatestNews />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
