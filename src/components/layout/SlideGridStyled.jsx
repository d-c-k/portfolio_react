import styled from 'styled-components'

const SlideGridStyled = styled.div`
    display: grid;
    grid-column: 2/4;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media screen and (min-width: 641px) and (max-width: 1007px){
        grid-column: 2/5;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (min-width: 1008px){
        grid-column: 2/7;
        grid-template-columns: repeat(5, 1fr);
    }
`

export default SlideGridStyled