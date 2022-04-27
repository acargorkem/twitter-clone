import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/user'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { parseMediaURL } from '../../utils/helpers'
import { Paper } from '@mui/material'
import Button from '@mui/material/Button'
import { StyledAvatar, BackButton } from './Profile.styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'

interface ProfileProps {
  user: IUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const navigate = useNavigate()

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
          <Typography fontWeight={700}>{user.name || user.username}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.tweets.length} Tweets
          </Typography>
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
            <Button sx={{ borderRadius: 30 }} variant="outlined">
              Edit Profile
            </Button>
          }
        />

        <CardContent>
          <Typography fontWeight={700}>{user.name || user.username}</Typography>
          <Typography variant="body2" color="text.secondary">
            @{user.username}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textTransform: 'capitalize' }}
          >
            <AddLocationAltOutlinedIcon fontSize="small" />
            {user.bio}
          </Typography>
          <Stack direction="row" alignItems="center" mt={2}>
            <Typography
              fontWeight={700}
              sx={{ mr: 0.5 }}
              color="text.secondary"
            >
              {user.following.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Following
            </Typography>
            <Typography
              fontWeight={700}
              sx={{ ml: 2, mr: 0.5 }}
              color="text.secondary"
            >
              {user.followers.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Followers
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile
