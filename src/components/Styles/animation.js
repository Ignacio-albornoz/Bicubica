import { keyframes, css } from 'styled-components'

export const fadeInKeyframes = keyframes`
  from {
    filter: blur(15px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({times = '2s' , type = 'ease' } = {}) => {
    css `animation: ${times} ${fadeInKeyframes} ${type};`
    console.log('blur')
}

export const hoverAnimation = keyframes`
  from {
    width: inherit;
  }

  to {
    width: 200px;
  }
`
