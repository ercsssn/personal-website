import './skills.css'
import {frontendSkills, backendSkills} from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Skills = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        
        <div className="container skills__container" data-aos="fade-up">
          <div className="skills__frontend">
            <h3>Frontend Development</h3>
            <div className="skills__content">
                {
                  frontendSkills.map(skill => 
                  <article key={skill.id}> 
                    <a className='skill__detail' href={skill.link} target="_blank" rel="noopener noreferrer"> 
                      <div className='skill__detail-icon'>{skill.icon}</div> 
                      <div>
                        <h4>{skill.name}</h4> 
                        {/* <small>{skill.years}</small> */}
                      </div>
                    </a>
                  </article>)
                }
            </div>
          </div>
          <div className="skills__backend">
            <h3>Backend Development</h3>
            <div className="skills__content">
                {
                  backendSkills.map(skill => 
                  <article key={skill.id}> 
                    <a className='skill__detail' href={skill.link} target="_blank" rel="noopener noreferrer"> 
                      <div className='skill__detail-icon'>{skill.icon}</div> 
                      <div>
                        <h4>{skill.name}</h4> 
                        {/* <small className='text-light'>{skill.years}</small> */}
                      </div>
                    </a>
                  </article>)
                }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills