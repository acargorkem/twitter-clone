import React, { useState } from 'react'
import {
  Container,
  StyledAvatar,
  StyledBox,
  StyledTweetButton,
  ButtonContainer,
  Input,
} from './AddTweet.styled'
import { TextField } from '@mui/material'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import GifOutlinedIcon from '@mui/icons-material/GifOutlined'
import Divider from '@mui/material/Divider'
import { postTweet } from '../../api/lib/tweet'
import { useSelector } from 'react-redux'
import { parseAvatarURL } from '../../utils/helpers'
import { RootState } from '../../store'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

interface Props {
  getTweets: () => void
}

const AddTweet: React.FC<Props> = ({ getTweets }) => {
  const authUser = useSelector((state: RootState) => state.user.authUser)
  const [images, setImages] = useState<Blob[]>([])
  const [input, setInput] = useState<string>('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const onFileChange = (e: any) => {
    if (images.length + e.target.files.length > 4) {
      return null // TODO: @leo :) MUI SNACKBAR
    }

    setImages((prevState) => [...prevState, ...e.target.files])
  }

  async function sendTweet() {
    try {
      const result = await postTweet(input)
      if (!result) return
      getTweets()
      setInput('')
    } catch (err) {
      return err
    }
  }

  return (
    <Container>
      <StyledAvatar src={parseAvatarURL(authUser.avatar)}></StyledAvatar>
      <StyledBox>
        <TextField
          onChange={handleInput}
          margin="dense"
          multiline
          fullWidth
          variant="standard"
          placeholder="What's happening?"
          value={input}
          InputProps={{
            disableUnderline: true,
          }}
        />

        <Box sx={{ width: 500 }}>
          {images.length > 0 && (
            <ImageList variant="masonry" cols={2} gap={8}>
              {images.map((image, index) => {
                return (
                  <ImageListItem key={index}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Paris"
                      width="90%"
                      height="auto"
                    />
                  </ImageListItem>
                )
              })}
            </ImageList>
          )}
        </Box>

        <Divider sx={{ marginTop: '1rem' }} />
        <ButtonContainer>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              type="file"
              id="icon-button-file"
              onChange={onFileChange}
              multiple={images.length < 3}
              disabled={images.length >= 4}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              disabled={images.length >= 4}
            >
              <InsertPhotoOutlinedIcon />
            </IconButton>
          </label>

          <GifOutlinedIcon />
          <StyledTweetButton
            onClick={sendTweet}
            disabled={!(input.length > 0 || images.length > 0)}
            variant="contained"
            color="primary"
          >
            Tweet
          </StyledTweetButton>
        </ButtonContainer>
      </StyledBox>
    </Container>
  )
}

export default AddTweet
