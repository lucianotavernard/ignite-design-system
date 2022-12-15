import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,

  overflow: 'hidden',

  display: 'flex',
  gap: '$2',
})

export const ToastContent = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '$80',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$md',

  backgroundColor: '$gray800',

  fontFamily: '$default',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '$2',
  },

  svg: {
    color: '$gray200',
    fontSize: '$xl',

    cursor: 'pointer',

    '&:hover': {
      color: '$gray100',
    },
  },

  strong: {
    color: '$white',
    fontWeight: '$bold',
    fontSize: '$xl',
    lineHeight: '$base',
  },

  p: {
    margin: '$0',
    marginBottom: '$2',

    padding: '$0',

    color: '$gray200',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})
