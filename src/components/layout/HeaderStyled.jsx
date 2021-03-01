import styled from 'styled-components'

const HeaderStyled = styled.div`
display: grid;
grid-column: 2/5;
grid-row: 2;
grid-column-gap: 1rem; 
grid-template-columns: repeat(3, 1fr);
z-index: 1;

@media screen and (min-width: 1008px){
    grid-column: 2/7;
    grid-template-columns: repeat(5, 1fr);
}

@media screen and (max-width: 640px){
    position: fixed;
    margin: 3.2rem 0 0 1.6rem;
}
`

export default HeaderStyled