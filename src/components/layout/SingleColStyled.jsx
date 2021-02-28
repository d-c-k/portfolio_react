import styled from 'styled-components'

const SingleColStyled = styled.div`
    @media screen and (max-width: 640px) {
        grid-row: calc(${props => props.col} + 1);
        grid-column: 1;
    }

    grid-column: ${props => props.col};
`

export default SingleColStyled