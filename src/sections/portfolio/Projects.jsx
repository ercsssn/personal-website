import Project from "./Project"
import ProProject from "./ProProject"

const Projects = ({projects}) => {
  return (
    <div className="portfolio__projects">
        {
            projects.map(project =>(
              project.category === 'professional' ? <ProProject key={project.id} project={project}/> : <Project key={project.id} project={project}/>
            ))
        }
    </div>
  )
}

export default Projects