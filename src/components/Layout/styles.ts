import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const LayoutWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const MenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  // flexShrink: 0,

  height: 'calc(100vh - 2.50rem)',
  width: '14.5rem',
  minWidth: '169px',

  backgroundImage: `url(/sidebar_background_image.svg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  borderRadius: '$md',
  margin: '$5 0 $5 $5',
  boxShadow: '0 2px 2px rgba(0,0,0,0.1)',

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '$10',
  },
})

export const NavMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  marginTop: '4rem',
})

export const NavLink = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  gap: '$3',

  marginBottom: '$6',

  textDecoration: 'none',
  fontSize: '$md',
  lineHeight: '$base',

  transition: '0.1s ease-in',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    selected: {
      true: {
        fontWeight: 'bold',
        position: 'relative',
        color: '$gray100',

        '&::before': {
          content: '',
          position: 'absolute',
          width: '0.25rem',
          height: '1.5rem',
          borderRadius: '$md',
          background: '$gradient-vertical',
          top: 0,
          bottom: 0,
          left: '-1.25rem',
        },
      },

      false: {
        color: '$gray400',
      },
    },
  },
})

export const LoginButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$3',

  border: 'none',
  background: 'transparent',

  svg: {
    transition: '0.2s ease-in',
  },

  span: {
    color: '$gray200',
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$base',

    marginBottom: '1.75rem',
  },

  '&:hover': {
    cursor: 'pointer',

    svg: {
      transform: 'translateX(0.3rem)',
    },
  },
})