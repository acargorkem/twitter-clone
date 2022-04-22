import React, { useState } from 'react'
import {
  Container,
  StyledAvatar,
  StyledBox,
  StyledTweetButton,
  ButtonContainer,
} from './AddTweet.styled'
import { TextField } from '@mui/material'
import Divider from '@mui/material/Divider'
import { postTweet } from '../../api/lib/tweet'
import { useSelector } from 'react-redux'
import { parseMediaURL } from '../../utils/helpers'
import { RootState } from '../../store'
import UploadImage from './UploadImage'
import ImageList from './ImageList'
import ImagePreviewer from '../common/ImagePreviewer'

interface Props {
  getTweets: () => void
}

const AddTweet: React.FC<Props> = ({ getTweets }) => {
  const authUser = useSelector((state: RootState) => state.user.authUser)
  const [images, setImages] = useState<Blob[]>([])
  const [input, setInput] = useState<string>('')

  const removeImage = (index: number) => {
    setImages((prevState) => {
      const newImages = [...prevState]
      newImages.splice(index, 1)
      return newImages
    })
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  async function sendTweet() {
    try {
      const result = await postTweet(input, images)
      if (!result) return
      getTweets()
      setInput('')
      setImages([])
    } catch (err) {
      return err
    }
  }

  return (
    <Container>
      <StyledAvatar src={parseMediaURL(authUser.avatar)}></StyledAvatar>
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

        {images.length > 1 && (
          <ImageList images={images} removeImage={removeImage} />
        )}

        {images.length === 1 && (
          <ImagePreviewer
            image={images[0]}
            removeImage={() => removeImage(0)}
          />
        )}

        <Divider sx={{ marginTop: '1rem' }} />
        <ButtonContainer>
          <UploadImage images={images} setImages={setImages} />
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
