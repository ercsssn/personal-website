import './services.css'
import data from './data'
import Card from '../../components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Services = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all of the services below.</p>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          )) 
        }
      </div>
    </section>
  )
}

export default Services