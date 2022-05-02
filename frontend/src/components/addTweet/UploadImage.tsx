import React from 'react'
import { Input } from './AddTweet.styled'
import IconButton from '@mui/material/IconButton'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'

interface UploadImageProps {
  images: Blob[]
  setImages: React.Dispatch<React.SetStateAction<Blob[]>>
}

const UploadImage: React.FC<UploadImageProps> = ({ images, setImages }) => {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return null

    if (images.length + e.target.files.length > 4) {
      // TODO: MUI SNACKBAR
      return null
    }
    const fileListAsArray = Array.from(e.target.files)
    setImages((prevState) => [...prevState, ...fileListAsArray])
  }

  return (
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
  )
}

export default UploadImage
