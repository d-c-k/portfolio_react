import styled from 'styled-components'

const SlideButtonStyled = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 2.5%;
    border: none;
    color: inherit;
    font-size: 2rem;
    background: none;
    cursor: pointer;
    ${props => props.side}: 2.5%;
`

export default SlideButtonStyled