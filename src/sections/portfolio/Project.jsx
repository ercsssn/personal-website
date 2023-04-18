import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Project Image"/>
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.live} className="btn sm" target="_blank" rel="noopener noreferrer">See It Live</a>
            <a href={project.code} className="btn sm primary" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
    </Card>
  )
}

export default Project