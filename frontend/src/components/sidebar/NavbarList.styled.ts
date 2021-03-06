import { styled } from '@mui/system'
import { ListItemButton, Typography } from '@mui/material'

interface IListItemButton {
  component: React.ElementType
  to: string
  key: string
  selected: boolean
  disableTouchRipple: boolean
}

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'block',
  textTransform: 'capitalize',
  fontWeight: 400,
  fontSize: '1.3rem',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

export const StyledListItemButton = styled(ListItemButton)<IListItemButton>(
  ({ theme }) => ({
    marginTop: theme.spacing(3),
    paddingLeft: 0,
    [theme.breakpoints.down('lg')]: {
      padding: 0,
    },
    '&:hover': {
      borderRadius: 40,
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        borderRadius: 40,
      },

      '& .MuiSvgIcon-root': {
        color: 'rgba(0, 0, 0, 1)',
      },

      '& .MuiTypography-root': {
        fontWeight: 900,
      },
    },
  }),
)
