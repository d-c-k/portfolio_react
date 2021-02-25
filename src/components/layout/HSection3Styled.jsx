import styled from 'styled-components'

const HSection3Styled = styled.div`
    display: grid;
    grid-column: 2/5;
    grid-row: 5;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (min-width: 1008px){
        grid-column: 2/7;
        grid-template-columns: repeat(5, 1fr);
    }
`

export default HSection3Styled