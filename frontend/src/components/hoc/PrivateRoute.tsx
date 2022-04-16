import React, { useEffect } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getUserThunk } from '../../store/userSlice'

const PrivateRoute: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth)

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getUserThunk(null))
  }, [dispatch])

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default PrivateRoute
