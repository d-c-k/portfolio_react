import styled from 'styled-components'

const MainContainerStyled = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: ${props => props.theme === 'light' ? 'white' : '#111111'}};
    color: ${props => props.theme === 'light' ? '#111111' : 'white'};

    @media screen and (max-width: 640px){
        display: grid;
        grid-template-columns: 1.6rem 1fr 1fr 1.6rem; 
        grid-template-rows: repeat(3, 100vh);
        scroll-snap-points-y: repeat(100vh);
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }

    @media screen and (min-width: 641px){
        display: grid;
        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;
        grid-template-rows: 3.2rem 4.2rem auto 1fr auto; 
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    @media screen and (min-width: 1008px){
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: 3.2rem 4.2rem auto 1fr auto; 
    }
`

export default MainContainerStyled