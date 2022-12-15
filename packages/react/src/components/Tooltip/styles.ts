import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',

  span: {
    position: 'absolute',
    top: '-150%',
    left: '50%',

    minWidth: '120px',

    padding: '$3 $4',
    borderRadius: '$md',

    color: '$gray100',
    backgroundColor: '$gray900',

    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',

    textAlign: 'center',

    lineHeight: '$short',
    letterSpacing: '-0.09px',

    transform: 'translateX(-50%)',

    opacity: 0,
    visibility: 'hidden',

    '&::before': {
      content: '',
      borderStyle: 'solid',
      borderColor: '$gray900 transparent',
      borderWidth: '6px 6px 0 6px',
      top: '100%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  '&:hover': {
    span: {
      opacity: 1,
      visibility: 'visible',
    },
  },
})
