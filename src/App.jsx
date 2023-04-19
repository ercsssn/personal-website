import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
// import Testimonials from './sections/testimonials/Testimonials';
// import Faqs from './sections/faqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Hero from './sections/hero/Hero';
// import Skills from './sections/skills/Skills';

const App = () => {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Header/>
      <About/>
      {/* <Skills/> */}
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      {/* <Faqs/> */}
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App