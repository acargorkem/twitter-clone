import React from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const PrivateRoute: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth)
  const location = useLocation()

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default PrivateRoute
