import styled from 'styled-components'

const SlideStyled = styled.div`
  min-width: 100%;
  height: 100%;
  transition: ${props => props.moved === 1 ? props.slideTime + 'ms' : '0'};
`

export default SlideStyled
