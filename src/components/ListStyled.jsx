import styled from 'styled-components'

const ListStyled = styled.ul`
    list-style-type: '-';
    columns: 2;

    @media screen and (min-width: 641px) and (max-width: 1007px){
        columns: 3;
    } 
`

export default ListStyled