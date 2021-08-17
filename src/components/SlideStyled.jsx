import styled from 'styled-components'

const SlideStyled = styled.div`
  min-width: 100%;
  height: 100%;
  transition: ${props => props.key === 1 ? '.7s' : '0'};
`

export default SlideStyled
