import Project from "./Project"
import ProProject from "./ProProject"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Projects = ({projects}) => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className="portfolio__projects" data-aos="fade-up">
        {
            projects.map(project =>(
              project.category === 'professional' ? <ProProject key={project.id} project={project}/> : <Project key={project.id} project={project}/>
            ))
        }
    </div>
  )
}

export default Projects