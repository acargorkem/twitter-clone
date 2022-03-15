import React from 'react'
import styles from '../styles/LoginUserNamePopUp.styled'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import TwitterIcon from '@mui/icons-material/Twitter'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

const PopUpContainer: React.FC<{ onCloseURL: string }> = ({
  children,
  onCloseURL,
}) => {
  return (
    <Box sx={styles.popUpParent}>
      <Container maxWidth="sm" sx={styles.container}>
        <Box sx={styles.upper}>
          <Link to={onCloseURL}>
            <IconButton aria-label="delete" size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Link>
          <TwitterIcon
            color={'primary'}
            fontSize="large"
            sx={{ flex: '1', margin: 'auto' }}
          />
        </Box>
        {children}
      </Container>
    </Box>
  )
}

export default PopUpContainer
