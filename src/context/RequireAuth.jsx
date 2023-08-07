// Packages
import { useLocation, Navigate } from 'react-router-dom'

// Files
import { useAuth } from '../hooks/useAuth'

// Codes
// eslint-disable-next-line react/prop-types
const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()

    if(!user){
        return <Navigate to='/login' state={{from: location}}  />
    }

  return children
}

export {RequireAuth}