import { styled } from '@/styles/stitches.config'

export const BookCard = styled('button', {
  display: 'flex',
  gap: '$5',

  padding: '$4 $5',
  marginBottom: '$3',
  background: '$gray700',
  borderRadius: '$md',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  border: '2px solid transparent',

  transition: '0.1s ease-in',

  img: {
    width: 'auto',
    height: '5.8rem',
  },

  '&:hover': {
    borderColor: '$gray600',
    cursor: 'pointer',
  },
})

export const BookCardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  height: '100%',

  '> div:first-child': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',

    'span:nth-child(1)': {
      color: '$gray100',
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$bold',
      lineHeight: '$short',
    },
    'span:nth-child(2)': {
      color: '$gray400',
      fontFamily: '$default',
      fontSize: '$sm',
      lineHeigth: '$base',
    },
  },

  '> div:last-child': {
    display: 'flex',
    gap: '$1',
    color: '$purple100',
  },
})
