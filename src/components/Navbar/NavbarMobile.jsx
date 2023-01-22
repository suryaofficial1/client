import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../images/menu.svg'
import './Navbar.scss'
import Logo from '../../images/amritlogo.png'
import { Grid, Typography } from '@mui/material'


const NavbarMobile = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const HomePageHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const allProductsHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const contactPageHandle = () => {
    setShowNavbar(!showNavbar)
  }
  const aboutUsHandle = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar-mobile">
      <div className="navbar-container">
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
            <Link onClick={HomePageHandle} className ="link" to="/">Homepage</Link>
            </li>
            <li>
            <Link onClick={allProductsHandle} className ="link" to="/allproducts">Products</Link>
            </li>
            <li>
            <Link onClick={contactPageHandle} className ="link" to="/contact-us">Contact</Link>
            </li>
            <li>
            <Link onClick={aboutUsHandle} className ="link" to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarMobile