import styled from 'styled-components'

const ButtonStyled = styled.button`
    cursor: pointer;
    font-size: 0.70rem;
    color:inherit;
    background: inherit;
    border: none;
    text-decoration: ${props => props.active ? 'underline' : 'none'};
`

export default ButtonStyled