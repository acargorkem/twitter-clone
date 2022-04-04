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

const TweetCard: React.FC = () => {
  return (
    <Container>
      <StyledAvatar>R</StyledAvatar>
      <Card elevation={0}>
        <CardHeader>
          <Typography fontWeight="fontWeightBold" color="text.primary">
            This impressive paella
          </Typography>
          <Typography variant="body2" color="text.secondary">
            @cook together
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
          <Typography>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton aria-label="share">
            <ModeCommentOutlinedIcon />1
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            35
          </IconButton>
          <IconButton aria-label="add to favorites">
            15
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            15
            <FileUploadOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  )
}

export default TweetCard
