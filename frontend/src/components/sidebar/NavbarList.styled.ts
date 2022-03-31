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
  fontWeigh: 400,
  fontSize: '1.3rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const StyledListItemButton = styled(ListItemButton)<IListItemButton>(
  ({ theme }) => ({
    marginTop: theme.spacing(3),
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
