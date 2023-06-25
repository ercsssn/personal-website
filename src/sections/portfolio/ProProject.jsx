import Card from '../../components/Card'

const ProProject = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="project"/>
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.live} className="btn sm" target="_blank" rel="noopener noreferrer">See It Live</a>
        </div>
    </Card>
  )
}

export default ProProject