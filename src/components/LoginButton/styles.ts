import { styled } from '@/styles/stitches.config'

export const ConnectButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  width: '100%',
  borderRadius: '$md',
  padding: '$5 $8',
  background: '$gray600',
  border: 0,
  marginBottom: '$4',

  span: {
    fontFamily: '$default',
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray200',
  },

  '&:hover': {
    background: '$gray500',
    cursor: 'pointer',
  },
})
