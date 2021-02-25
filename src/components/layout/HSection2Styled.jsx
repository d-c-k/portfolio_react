import styled from 'styled-components'

const HSection2Styled = styled.div`
    background: red;
    display: grid;
    grid-column: 1/6;
    grid-row: 4;
    position: relative;

    @media screen and (min-width: 1008px){
        grid-column: 1/8
    }

`

export default HSection2Styled