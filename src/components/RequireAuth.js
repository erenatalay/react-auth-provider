import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  if ( !localStorage.getItem("userData")) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  return children
}
