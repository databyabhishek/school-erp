// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default Home