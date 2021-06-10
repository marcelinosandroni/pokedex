import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`

export const Image = styled.img`
  animation: ${rotate} 0.8s ease-in-out infinite forwards;
  width: ${props => props.size || '200px'};
  display: block;
  margin: auto;
`
