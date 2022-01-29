import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Auth Provider</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to='/' style={navLinkStyles}>
        Home
      </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to='/about' style={navLinkStyles}>
        About
      </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to='/products' style={navLinkStyles}>
        Products
      </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to='/profile' style={navLinkStyles}>
        Profile
      </NavLink>
          </li>


          <li className="nav-item">
          {!auth.user && (
        <NavLink className="nav-link" to='/login' style={navLinkStyles}>
          Login
        </NavLink>
          )}
          </li>

     
        </ul>
   
      </div>
    </div>
  </nav>
  )
}
