// src/pages/landing/Home/Home.jsx
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import Hero from '../../../components/landing/Hero'
import Features from '../../../components/landing/Features'
import Stats from '../../../components/landing/Stats'
import Testimonials from '../../../components/landing/Testimonials'
import Pricing from '../../../components/landing/Pricing'

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