import styled from 'styled-components'

const HeaderStyled = styled.div`
    z-index: 1;
    
    @media screen and (max-width: 640px){
        width: calc(100vw - 3.2rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;        
        position: fixed;
        margin: 3.2rem 1.6rem 0 1.6rem;
    }
    
    @media screen and (min-width: 641px){
        display: grid;
        grid-row: 2;
        grid-column: 2/5;
        grid-column-gap: 1rem; 
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1008px){
        grid-column: 2/7;
        grid-template-columns: repeat(5, 1fr);
    }
`

export default HeaderStyled
