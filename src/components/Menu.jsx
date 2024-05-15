import { NavLink } from 'react-router-dom'

const Menu = () => {

  const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inActive')

  return (
    <div>
        <nav className='menu'>
          <NavLink
            className={setActiveClass}
            to = '/'>
              Home
          </NavLink>

          |

          <NavLink
            className={setActiveClass}
            to = '/favoritas'>
              Favoritas
          </NavLink>
        </nav>
    </div>
  )
}

export default Menu