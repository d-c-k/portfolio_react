import styled from 'styled-components'

const TextBlockStyled = styled.div`
    grid-column: 1/3;
    grid-row: 3;

    @media screen and (min-width: 641px){
        grid-column: 2/4;
        grid-row: 1;
    }
`

export default TextBlockStyled