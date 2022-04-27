import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainWrapper from '../../components/common/MainWrapper'
import Profile from '../../components/profile/Profile'
import { getUser } from '../../api/lib/user'

const Profilepage = () => {
  const { username } = useParams()
  const [user, setuser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return null
      const result = await getUser(username)
      setuser(result.data.user)
    }
    fetchUser()
  }, [username])

  return (
    <>
      {user ? (
        <MainWrapper>
          <Profile user={user} />
        </MainWrapper>
      ) : (
        <MainWrapper>User not found!</MainWrapper>
      )}
    </>
  )
}
export default Profilepage
