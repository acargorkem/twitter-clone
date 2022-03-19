import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../../store'

const PublicRoute: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth)
  const location = useLocation()

  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  )
}

export default PublicRoute
