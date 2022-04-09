import React, { useState } from 'react'
import {
  Container,
  StyledAvatar,
  StyledBox,
  StyledTweetButton,
  ButtonContainer,
} from './AddTweet.styled'
import { TextField } from '@mui/material'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import GifOutlinedIcon from '@mui/icons-material/GifOutlined'
import Divider from '@mui/material/Divider'
import { postTweet } from '../../api/lib/tweet'

interface Props {
  getTweets: () => void
}

const AddTweet: React.FC<Props> = ({ getTweets }) => {
  const [input, setInput] = useState<string>('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
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
      <StyledAvatar>R</StyledAvatar>
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
        <Divider sx={{ marginTop: '1rem' }} />
        <ButtonContainer>
          <InsertPhotoOutlinedIcon />
          <GifOutlinedIcon />
          <StyledTweetButton
            onClick={sendTweet}
            disabled={!(input.length > 0)}
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
