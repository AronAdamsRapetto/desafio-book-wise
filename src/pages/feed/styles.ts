import { styled } from '../../styles/stitches.config'

export const PageContainer = styled('div', {
  marginTop: '$5',
  marginLeft: '6rem',
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
  gridTemplateColumns: '1fr 20.3rem',
})

export const LeftSide = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray100',

    marginBottom: '$4',
  },
})

export const ActivityCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  padding: '$6',

  background: '$gray700',
  borderRadius: '$md',
  boxShadow: '0 2px 2px rgba(0,0,0,0.3)',
})

export const ActivityHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ActivityUserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  'div:nth-child(1)': {
    width: '2.5rem',
    height: '2.5rem',
    background:
      'linear-gradient($gray700, $gray700) padding-box, $gradient-vertical border-box',
    borderRadius: '$full',
    border: '2px solid transparent',

    img: {
      width: '100%',
      heigth: '100%',
      objectFit: 'cover',
    },
  },

  'div:nth-child(2)': {
    display: 'flex',
    flexDirection: 'column',

    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: 'base',

    'span:nth-child(1)': {
      fontSize: '$md',
      color: '$gray100',
    },

    'span:nth-child(2)': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const ActivityContent = styled('div', {
  display: 'flex',
  gap: '$5',

  img: {
    height: '9.5rem',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    'span:nth-child(1)': {
      fontFamily: '$default',
      fontSize: '$md',
      fontWeight: '$bold',
      lineHeight: '$short',
      color: '$gray100',
    },

    'span:nth-child(2)': {
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$regular',
      lineHeight: '$base',
      color: '$gray400',
      marginBottom: '$5',
    },

    p: {
      fontFamily: '$default',
      fontSize: '$sm',
      fontWeight: '$regular',
      lineHeight: '$base',
      color: '$gray300',
    },
  },
})

export const RigthSide = styled('aside', {})
