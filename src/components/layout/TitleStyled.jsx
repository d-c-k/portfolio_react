import styled from 'styled-components'

const TitleStyled = styled.div`
    display: grid;
    grid-column: 2/4;
    grid-row: 2;
    z-index: 1;

    @media screen and (max-width: 640px){
        position: fixed;
        margin: 3.2rem 0 0 1.6rem;
    }
`

export default TitleStyled