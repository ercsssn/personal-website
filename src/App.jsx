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
import Skills from './sections/skills/Skills';
import Modal from './components/Modal';
import Theme from './sections/theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef, useState, useEffect } from 'react';

const App = () => {
  const mainRef = useRef();

  const {themeState} = useThemeContext();

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  //check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    //check if we scrolled up or down at least 20px
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)){
      showFloatingNavHandler();
    }else{
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1000);

    //cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition, floatingNavToggleHandler]);

  const [showNavBar, setShowNavBar] = useState(true);
  const [currentYPosition, setCurrentYPosition] = useState(0);

  const showNavBarHandler = () => {
    setShowNavBar(true);
  }

  const hideNavBarHandler = () => {
    setShowNavBar(false);
  }

  //check if floating nav should be shown or hidden
  const navBarToggleHandler = () => {
    //check if we scrolled up or down at least 20px
    if(currentYPosition !== 0 ){
      showNavBarHandler();
    }else{
      hideNavBarHandler();
    }

    setCurrentYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(navBarToggleHandler, 100);

    //cleanup function
    return () => clearInterval(checkYPosition);
  }, [currentYPosition, navBarToggleHandler]);

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      {showNavBar && <Navbar/>}
      <Hero/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      {/* <Testimonials/> */}
      {/* <Faqs/> */}
      <Contact/>
      <Footer/>
      <Modal/>
      <Theme/>
      {showFloatingNav && <FloatingNav/>}
      
    </main>
  )
}

export default App