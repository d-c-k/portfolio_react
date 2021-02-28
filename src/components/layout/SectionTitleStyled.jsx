import styled from 'styled-components'

const SectionTitleStyled = styled.div`
    @media screen and (max-width: 640px){
        grid-column: 1/3;
        grid-row: 2;
    }

    @media screen and (min-width: 641px){
        grid-column: 1;
    }
`

export default SectionTitleStyled