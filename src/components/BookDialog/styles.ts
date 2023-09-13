import { styled } from '@/styles/stitches.config'
import * as RadixDialog from '@radix-ui/react-dialog'

export const Overlay = styled(RadixDialog.Overlay, {
  position: 'fixed',
  background: '$black',
  inset: 0,
  opacity: 0.5,
})

export const ContentContainer = styled(RadixDialog.Content, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  boxShadow: '-4px 0 30px 0 rgba(0,0,0,0.50)',

  width: '45vw',
  padding: '$6 3rem',

  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '23px',
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700',
    border: '8px solid $gray800',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$full',

    backgroundClip: 'padding-box',
    border: '8px solid transparent',

    '&:hover': {
      backgroundColor: '$gray500',
    },
  },
})

export const CloseButton = styled(RadixDialog.Close, {
  border: 0,
  background: 'transparent',
  alignSelf: 'flex-end',

  lineHeight: 0,
  color: '$gray400',

  marginBottom: '$4',

  '&:hover': {
    cursor: 'pointer',
    opacity: 0.6,
  },
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  padding: '$6 $8 $4',
  marginBottom: '$10',

  background: '$gray700',
  borderRadius: '$sm',

  '& > div': {
    display: 'flex',
    gap: '$8',
  },
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > div:first-child': {
    display: 'flex',
    flexDirection: 'column',

    '& > span:first-child': {
      color: '$gray100',
      fontFamily: '$default',
      fontSize: '$lg',
      fontWeight: '$bold',
      lineHeight: '$short',
    },

    '& > span:last-child': {
      color: '$gray300',
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$regular',
      lineHeight: '$base',
    },
  },

  '& > div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    '& > div': {
      display: 'flex',
      gap: '$1',

      color: '$purple100',
    },

    '& > span': {
      color: '$gray400',
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$regular',
      fontHeight: '$base',
    },
  },
})

export const BulletInfoContainer = styled('div', {
  display: 'flex',
  gap: '3.5rem',

  padding: '$6 0',
  borderTop: '1px solid $gray600',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    svg: {
      color: '$green100',
    },

    '& > div': {
      display: 'flex',
      flexDirection: 'column',

      '& > span:first-child': {
        color: '$gray300',
        fontFamily: '$default',
        fontSize: '$sm',
        fontWeight: '$regular',
        lineHeight: '$base',
      },

      '& > span:last-child': {
        color: '$gray200',
        fontFamily: '$default',
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$short',
      },
    },
  },
})

export const RatingsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  '& > div:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '$1',

    '& > span': {
      color: '$gray200',
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$regular',
      lineHeight: '$base',
    },

    '& > button': {
      border: 0,
      background: 'transparent',
      lineHeight: 0,

      color: '$purple100',
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$bold',

      '&:hover': {
        cursor: 'pointer',
        opacity: 0.6,
      },
    },
  },
})

export const RateCardContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  padding: '$6',

  background: '$gray700',
  borderRadius: '$sm',

  '& > span:last-child': {
    color: '$gray300',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const RateHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '& > div:last-child': {
    display: 'flex',
    gap: '$1',

    color: '$purple100',
  },
})

export const UserContainer = styled('div', {
  display: 'flex',
  gap: '$4',

  '& > div:first-child': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    border: '1px solid transparent',
    background:
      'linear-gradient($gray700, $gray700) padding-box, $gradient-vertical border-box',
    borderRadius: '$full',
  },

  '& > div:last-child': {
    display: 'flex',
    flexDirection: 'column',

    '& > span:first-child': {
      color: '$gray100',
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$bold',
      lineHeight: '$short',
    },

    '& > span:last-child': {
      color: '$gray400',
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$regular',
      lineHeight: '$base',
    },
  },
})
