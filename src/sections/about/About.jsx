import AboutImage from '../../assets/header.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="about" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects my clients love have always been my passion. Being in the web development industry for over 2 years and serving happy clients, I'm always motivated to do more!
          </p>
          <p>
            Deeply invested in the life-long learning mentality, I'm a frontend web developer who carries a keen eye for design in an user-first approach. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online and from my background as an aeronautical engineer, I'm well acquainted to bringing out solutions to complex problems. Get in touch today with the details of your project, let's get started! Checkout my resume below!
          </p>
          <a href={CV} download="JohnEricssonRobarios-CV.pdf" className='btn primary'>Download CV
          <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About 