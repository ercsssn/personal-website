import './floating-nav.css'
import data from './data'
import ScrollSpy from 'react-ui-scrollspy'
import Nav from './Nav'

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <ScrollSpy classNamek="scrollspy" items={['header', 'about', 'services', 'portfolio', 'contact']} currentClassName='active'>
        {
          data.map(item => <Nav key={item.id} item={item}/>)
        }
      </ScrollSpy>
    </ul>
  )
}

export default FloatingNav