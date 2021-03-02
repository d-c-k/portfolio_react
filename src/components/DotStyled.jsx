import styled from 'styled-components'

const DotStyled = styled.div`
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 .5rem;
    border-radius: 50%;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.active ? props.color : 'none'};
`

export default DotStyled