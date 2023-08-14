import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '35% 65%',
  height: '100vh',
})

export const RigthSide = styled('div', {
  maxHeight: '100vh',
  padding: '1.25rem',
  position: 'relative',
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
})

export const MenuLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '23.25rem',
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
