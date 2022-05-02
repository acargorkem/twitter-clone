import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import {
  Container,
  UpperSection,
  SaveButton,
  Title,
  BackButton,
  Input,
} from './EditProfileModal.styled'
import { Button, Stack, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ImagePreviewer from '../common/ImagePreviewer'
import { postUpdateUserThunk } from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import { parseMediaURL } from '../../utils/helpers'

interface ProfileProps {
  isModalOpen: boolean
  EditProfileHandleOpen: () => void
  initialName: string
  initialBio: string
  initialAvatar: string
}

const EditProfileModal: React.FC<ProfileProps> = ({
  isModalOpen,
  EditProfileHandleOpen,
  initialName,
  initialBio,
  initialAvatar,
}) => {
  const [bio, setBio] = useState(initialBio)
  const [name, setName] = useState(initialName)
  const [profileImage, setProfileImage] = useState<Blob[]>([])
  const dispatch = useDispatch()

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return null

    const filesList = Array.from(e.target.files)
    setProfileImage([...filesList])
  }

  const removeImage = () => {
    setProfileImage([])
  }

  const onBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value)
  }

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const sendInfoButtonHandler = () => {
    dispatch(postUpdateUserThunk({ bio, name, images: profileImage }))
    EditProfileHandleOpen()
    setProfileImage([])
  }

  // TODO: Remove Blob image when user clicks on "Back"
  // const closePopUp = () => {
  //   setProfileImage([])
  //   EditProfileHandleOpen()
  // }

  useEffect(() => {
    const setBlobFromAvatarUrl = () => {
      if (initialAvatar.length == 0) return null

      fetch(parseMediaURL(initialAvatar))
        .then((response) => response.blob())
        .then((blobData) => setProfileImage([blobData]))
    }
    setBlobFromAvatarUrl()
  }, [initialAvatar])

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => EditProfileHandleOpen()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <UpperSection>
            <BackButton onClick={() => EditProfileHandleOpen()}>
              <ArrowBackIcon />
            </BackButton>
            <Title variant="h6"> Update your profile</Title>
            <SaveButton onClick={sendInfoButtonHandler}>Save</SaveButton>
          </UpperSection>

          <TextField
            onChange={onNameChange}
            fullWidth
            margin="dense"
            label="Name"
            variant="outlined"
            value={name}
          />
          <TextField
            onChange={onBioChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            label="Bio"
            variant="outlined"
            value={bio}
          />
          <Stack flexDirection={'column'} spacing={2}>
            <label htmlFor="icon-button-file">
              <Input
                onChange={onFileChange}
                accept="image/*"
                type="file"
                id="icon-button-file"
              />
              <Button color="primary" variant="contained" component="span">
                Upload image
              </Button>
            </label>

            {profileImage.length === 1 ? (
              <ImagePreviewer
                image={profileImage[0]}
                removeImage={removeImage}
              />
            ) : null}
          </Stack>
        </Container>
      </Modal>
    </>
  )
}

export default EditProfileModal
