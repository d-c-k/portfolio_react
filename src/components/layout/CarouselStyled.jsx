import styled from 'styled-components'

const CarouselStyled = styled.div`
    @media screen and (max-width: 640px){
        // scroll-snap-points-x: repeat(100vw);
        // scroll-snap-type: x mandatory;
        // overflow-x: scroll;
    }

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
`

export default CarouselStyled