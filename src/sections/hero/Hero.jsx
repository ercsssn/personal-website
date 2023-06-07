import './hero.css'
import Particle from './particles/Particle'
import PersonalLogo from '../../assets/jer-logo.png'

const Hero = () => {
  return (
    <div id='hero' className='particles-container'>
      <Particle/>
      <div className='hero__title'>
        <div className='hero__logo'>
          <img src={PersonalLogo} alt="logo" />
        </div>

        <h4>Web Developer | Licensed Engineer</h4>
      </div>
      
      
    </div>
         
  )
}

export default Hero