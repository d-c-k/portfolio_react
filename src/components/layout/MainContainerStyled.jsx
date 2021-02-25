import styled from 'styled-components'

const MainContainerStyled = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: ${props => props.theme === 'dark' ? '#1e1e1e' : 'white'};
    color: ${props => props.theme === 'dark' ? 'white' : '#1e1e1e'};

    display: none;
    grid-template-columns: 1.6rem 1fr 1fr 1.6rem;
    grid-template-rows: 3.2rem 2rem 2rem 1fr; 
    grid-row-gap: 1rem;

    @media screen and (min-width: 641px){
        display: grid;
        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;
        grid-template-rows: 3.2rem 4.2rem 1fr 1.5fr .25fr; 
        grid-column-gap: 1rem;
    }

    @media screen and (min-width: 1008px){
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 3.2rem 4.2rem .5fr 1.75fr .25fr; 
    }
`

export default MainContainerStyled