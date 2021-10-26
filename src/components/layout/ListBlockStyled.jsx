import styled from 'styled-components'

const ListBlockStyled = styled.div`
    grid-column: 1/3;
    grid-row: 4;

    @media screen and (min-width: 641px) and (max-width: 1007px){
        grid-column: 2/4;
        grid-row: 2;
    }

    @media screen and (min-width: 1008px){
        grid-column: 5;
        grid-row: 1;
    }
`

export default ListBlockStyled
