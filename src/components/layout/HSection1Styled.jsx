import styled from 'styled-components'

const HSection1Styled = styled.div`
    display: grid;
    grid-column: 2/4;
    grid-row:1;  
    grid-column-gap: 1rem; 
    grid-row-gap: 1rem; 
    @media screen and (max-width: 640px){
        scroll-snap-align: start;        
        grid-template-rows: 5.2rem 2rem auto 1fr;
    }

    @media screen and (min-width: 641px) and (max-width: 1007px){
        grid-column: 2/5;
        grid-row: 3;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
    }

    @media screen and (min-width: 1008px){
        grid-column: 2/8;
        grid-row: 3;
        grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr 0.5fr; 
    }

    @media screen and (min-width: 1400px){
        grid-template-columns: repeat(6, 1fr);
    }
`

export default HSection1Styled
