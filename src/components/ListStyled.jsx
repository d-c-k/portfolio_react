import styled from 'styled-components'

const ListStyled = styled.ul`
    list-style-type: '-';
    list-style-position: inside;
    columns: 2;

    @media screen and (min-width: 641px) and (max-width: 1007px){
        columns: 3;
    } 

    @media screen and (min-width: 1008px) {
        list-style-position: outside;
    }
`

export default ListStyled