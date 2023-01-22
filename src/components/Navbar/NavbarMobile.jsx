import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../images/menu.svg'
import './Navbar.scss'
import Logo from '../../images/amritlogo.png'


const NavbarMobile = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar-mobile">
      <div className="container">
        {/* <Link className ="linkk" to="/">Amrit Dawani</Link> */}
        <Link to="/">
          <div className='logo-container'> 
            <img className='linkk' src={Logo} alt='Logo' /> 
          </div>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
            <Link className ="link" to="/">Homepage</Link>
            </li>
            <li>
            <Link className ="link" to="/allproducts">Products</Link>
            </li>
            <li>
            <Link className ="link" to="/contact-us">Contact</Link>
            </li>
            <li>
            <Link className ="link" to="/about-us">About Us</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMobile