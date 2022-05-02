import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainWrapper from '../../components/common/MainWrapper'
import Profile from '../../components/profile/Profile'
import { getUser } from '../../api/lib/user'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { IUser } from '../../types/user'

const Profilepage = () => {
  const { username } = useParams()
  const [user, setUser] = useState<IUser>()
  const authUser = useSelector((state: RootState) => state.user.authUser)

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return null
      const result = await getUser(username)
      setUser(result.data.user)
    }

    fetchUser()
  }, [username, authUser])

  return (
    <>
      {user ? (
        <MainWrapper>
          <Profile
            user={user}
            isMyUser={authUser.username == username}
            isFollowed={user.followers.includes(authUser._id)}
          />
        </MainWrapper>
      ) : (
        <MainWrapper>User not found!</MainWrapper>
      )}
    </>
  )
}
export default Profilepage
