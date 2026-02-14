import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Stats from "@/components/sections/Stats"
import Stations from "@/components/sections/Stations"
import Testimonials from "@/components/sections/Testimonials"
import Newsletter from "@/components/sections/Newsletter"
import Footer from "@/components/layout/Footer"

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Stations />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default App

