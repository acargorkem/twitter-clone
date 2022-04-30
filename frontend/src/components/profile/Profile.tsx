import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/user'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { parseMediaURL } from '../../utils/helpers'
import { Paper } from '@mui/material'

import {
  StyledAvatar,
  BackButton,
  BoldText,
  LightText,
  InfoText,
  StyledSpan,
  StyledButton,
} from './Profile.styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import EditProfileModal from './EditProfileModal'
import { useDispatch } from 'react-redux'
import {
  postFollowUserThunk,
  postUnFollowUserThunk,
} from '../../store/userSlice'

interface ProfileProps {
  user: IUser
  isMyUser?: boolean
  isFollowed?: boolean
}

const Profile: React.FC<ProfileProps> = ({ user, isMyUser, isFollowed }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const EditProfileHandleOpen = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  const onFollowHandle = () => {
    isFollowed
      ? dispatch(postUnFollowUserThunk({ userID: user._id }))
      : dispatch(postFollowUserThunk({ userID: user._id }))
  }

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 53, position: 'sticky', padding: 0.2, top: 0 }}
      >
        <BackButton onClick={() => navigate(-1)} aria-label="delete">
          <ArrowBackIcon />
        </BackButton>
        <Stack spacing={0} ml={2}>
          <BoldText>{user.name || user.username}</BoldText>
          <LightText variant="body2"> {user.tweets.length} Tweets</LightText>
        </Stack>
      </Stack>
      <Card>
        <CardMedia
          component={Paper}
          sx={{ backgroundColor: 'grey.200', height: 175 }}
          elevation={0}
        />

        <CardHeader
          sx={{ position: 'relative' }}
          avatar={
            <StyledAvatar
              src={parseMediaURL(user.avatar)}
              aria-label="recipe"
            />
          }
          action={
            isMyUser ? (
              <StyledButton onClick={EditProfileHandleOpen} variant="outlined">
                Edit Profile
              </StyledButton>
            ) : (
              <StyledButton onClick={onFollowHandle} variant="outlined">
                {isFollowed ? 'Unfollow' : 'Follow'}
              </StyledButton>
            )
          }
        />

        <CardContent>
          <BoldText>{user.name || user.username}</BoldText>
          <LightText variant="body2"> @{user.username}</LightText>

          <InfoText variant="body2">{user.bio || 'Unknown'}</InfoText>
          <Stack direction="row" alignItems="center" mt={2} spacing={2}>
            <BoldText>
              {user.following.length}
              <StyledSpan>Following</StyledSpan>
            </BoldText>

            <BoldText>
              {user.followers.length}
              <StyledSpan>Followers</StyledSpan>
            </BoldText>
          </Stack>
        </CardContent>
      </Card>
      <EditProfileModal
        initialName={user.name}
        initialBio={user.bio}
        initialAvatar={user.avatar}
        isModalOpen={isModalOpen}
        EditProfileHandleOpen={EditProfileHandleOpen}
      />
    </Box>
  )
}

export default Profile
