import React from 'react'
import { Avatar, Popover } from '@mui/material'
import {
  StyledMobileAvatarButton,
  StyledLogoutButton,
} from './SidebarProfile.styled'
import ProfileCard from '../profileCard/ProfileCard'
import { RootState } from '../../store'
import { parseMediaURL } from '../../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/userSlice'

const SidebarProfile = () => {
  const authUser = useSelector((state: RootState) => state.user.authUser)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChangeAvatar = () => {
    dispatch(logout())
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <ProfileCard
        isButton={true}
        name={authUser.name}
        username={authUser.username}
        avatarSrc={parseMediaURL(authUser.avatar)}
        onClickHandler={handleClick}
      />
      <StyledMobileAvatarButton onClick={handleClick}>
        <Avatar aria-label="user avatar" src={parseMediaURL(authUser.avatar)} />
      </StyledMobileAvatarButton>
      <Popover
        PaperProps={{ sx: { width: 250, borderRadius: 3, padding: 1 } }}
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <ProfileCard
          isInPopover
          name={authUser.name}
          username={authUser.username}
          avatarSrc={parseMediaURL(authUser.avatar)}
        />
        <StyledLogoutButton onClick={handleChangeAvatar}>
          Log out @{authUser.username}
        </StyledLogoutButton>
      </Popover>
    </>
  )
}

export default SidebarProfile
