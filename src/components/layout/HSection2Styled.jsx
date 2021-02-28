import styled from 'styled-components'

const HSection2Styled = styled.div`
    display: grid;
    grid-column: 1/5;
    grid-row: 2;
    overflow:hidden;

    @media screen and (max-width: 640px){
        scroll-snap-align: start; 
    }
    
    @media screen and (min-width: 641px){
        grid-column: 1/6;
        grid-row: 4;
    }

    @media screen and (min-width: 1008px){
        grid-column: 1/8
    }

`

export default HSection2Styled