import './skills.css'
import {frontendSkills, backendSkills} from './data'

const Skills = () => {
  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        
        <div className="container skills__container">
          <div className="skills__frontend">
            <h3>Frontend Development</h3>
            <div className="skills__content">
                {
                  frontendSkills.map(skill => 
                  <article key={skill.id}> 
                    <a className='skill__detail' href={skill.link}> 
                      <div className='skill__detail-icon'>{skill.icon}</div> 
                      <div>
                        <h4>{skill.name}</h4> 
                        <small>{skill.years}</small>
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
                    <a className='skill__detail' href={skill.link}> 
                      <div className='skill__detail-icon'>{skill.icon}</div> 
                      <div>
                        <h4>{skill.name}</h4> 
                        <small className='text-light'>{skill.years}</small>
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