import React from 'react'
import { Container, StyledAvatar, CardHeader } from './TweetCard.styled'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { ITweet } from '../../types/tweet'

interface tweetCardProps {
  tweet: ITweet
}

const TweetCard: React.FC<tweetCardProps> = ({ tweet }) => {
  return (
    <Container>
      <StyledAvatar>R</StyledAvatar>
      <Card elevation={0}>
        <CardHeader>
          <Typography fontWeight="fontWeightBold" color="text.primary">
            {tweet.author.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tweet.author.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(tweet.createdAt).toDateString()}
          </Typography>
          <IconButton
            aria-label="upload picture"
            component="span"
            sx={{ ml: 'auto', p: 0 }}
          >
            <MoreHorizIcon />
          </IconButton>
        </CardHeader>
        <CardContent sx={{ px: 0, py: 2 }}>
          <Typography>{tweet.tweet}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton aria-label="share">
            <ModeCommentOutlinedIcon />
            {tweet.replies.length}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            {tweet.retweets.length}
          </IconButton>
          <IconButton aria-label="add to favorites">
            {tweet.likes.length}
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FileUploadOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  )
}

export default TweetCard
