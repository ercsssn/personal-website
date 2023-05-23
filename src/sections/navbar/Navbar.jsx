import Logo from '../../assets/logo.png'
import data from './data'
import {VscColorMode} from 'react-icons/vsc'
import { useModalContext } from '../../context/modal-context'
import './navbar.css'

const Navbar = () => {
  const {showModalHandler} = useModalContext();
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}> <a href="{item.link}">{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={showModalHandler}><VscColorMode/></button>
      </div>
    </nav>
  )
}

export default Navbar