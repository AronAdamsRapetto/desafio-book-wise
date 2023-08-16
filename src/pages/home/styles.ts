import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '40% 60%',
  height: '100vh',

  '@media(max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const RigthSide = styled('div', {
  maxHeight: '100vh',
  padding: '$5',
  position: 'relative',

  '@media(max-width: 768px)': {
    height: '40%',
    width: '100%',
    padding: '$3',
  },
})

export const InnerContainer = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '$md',
  position: 'relative',
  overflow: 'hidden',
})

export const LeftSide = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media(max-width: 768px)': {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: '$6',
  },
})

export const MenuLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '23.25rem',
  margin: '$5',
  fontFamily: '$default',

  '> h3': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
  },

  '> span': {
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray200',
    paddingBottom: '$10',
  },
})
