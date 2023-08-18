import { styled } from '../../styles/stitches.config'

export const PageContainer = styled('div', {
  marginTop: '$5',
  margin: '0 6rem',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  margin: '$10 0',

  h1: {
    fontFamily: '$default',
    fontSize: '2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
  },

  svg: {
    color: '$green100',
  },
})

export const PageWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 22.5vw',
})

export const LeftSide = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  marginRight: '4rem',

  '> span': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray100',

    marginBottom: '$4',
  },
})

export const RigthSide = styled('aside', {
  display: 'flex',
  flexDirection: 'column',

  '> div:nth-child(1)': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    fontFamily: '$default',
    fontSize: '$sm',
    lineHeight: '$base',

    marginBottom: '$5',

    '> span': {
      color: '$gray100',
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',

      textDecoration: 'none',
      color: '$purple100',

      padding: '$1 $2',
      borderRadius: '$sm',
      transition: '0.1s ease-in',

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.1)',
      },
    },
  },
})
