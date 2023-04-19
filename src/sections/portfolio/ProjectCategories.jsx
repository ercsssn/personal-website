import CategoryButton from "./CategoryButton"

const ProjectCategories = ({categories}) => {
  return (
    <div className="portfolio__categories">
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} className={`btn cat__btn white`}/>                
            ))
        }
    </div>
  )
}

export default ProjectCategories