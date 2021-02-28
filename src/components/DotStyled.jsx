import styled from 'styled-components'

const DotStyled = styled.div`
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 .5rem;
    border-radius: 50%;
    border: 1px solid white;
    background-color: ${props => props.active ? 'white' : 'none'};
`

export default DotStyled