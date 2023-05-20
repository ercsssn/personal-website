import Modal from "../../components/Modal"
import BackgroundColor from "./BackgroundColor"
import PrimaryColor from "./PrimaryColor"
import { primaryColors, backgroundColors } from "./data"
import './theme.css'


const Theme = () => {
  return (
    <Modal className="theme__modal">
        <h3>Customize the Theme</h3>
        <small>Try to change the primary and background color to your preference.</small>
        <div className="theme__primary-wrapper">
            <h5>Primary Color</h5>
            <div className="theme__primary-colors">
              {
                  primaryColors.map(color => <PrimaryColor key={color.className} className={color.className}/>)
              }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Background Color</h5>
            <div className="theme__background-colors">
              {
                  backgroundColors.map(color => <BackgroundColor key={color.className} className={color.className}/>)
              }
            </div>
        </div>
    </Modal>
  )
}

export default Theme