import React from 'react'
import { Avatar, CardHeader, CardActionAreaProps } from '@mui/material'
import { CardActionArea } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { StyledCard } from './ProfileCard.styled'
import DoneIcon from '@mui/icons-material/Done'

interface ActionAreaProps {
  isButton?: boolean
  children: React.ReactNode
}

const ActionArea: React.FC<ActionAreaProps & CardActionAreaProps> = ({
  isButton = false,
  children,
  ...rest
}) => {
  return (
    <>
      {isButton ? (
        <CardActionArea {...rest}>{children}</CardActionArea>
      ) : (
        children
      )}
    </>
  )
}

interface Props {
  isButton?: boolean
  isInPopover?: boolean
  username: string
  name: string
  avatarSrc: string | undefined
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ProfileCard: React.FC<Props> = ({
  isButton,
  isInPopover = false,
  name,
  avatarSrc,
  username,
  onClickHandler,
}) => {
  return (
    <>
      <StyledCard
        sx={{
          display: isInPopover ? 'block' : { sm: 'none', lg: 'block' },
        }}
      >
        <ActionArea isButton={isButton} onClick={onClickHandler}>
          <CardHeader
            avatar={<Avatar src={avatarSrc} aria-label="user avatar" />}
            title={name}
            subheader={`@${username}`}
            action={
              isInPopover ? <DoneIcon color="primary" /> : <MoreHorizIcon />
            }
            sx={{
              '& .MuiCardHeader-action': {
                margin: '0 0 0 15px',
                alignSelf: 'center',
              },
            }}
          ></CardHeader>
        </ActionArea>
      </StyledCard>
    </>
  )
}

export default ProfileCard
