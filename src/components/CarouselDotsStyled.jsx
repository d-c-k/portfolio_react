import styled from 'styled-components'

const CarouselDotsStyled = styled.div`
    @media screen and (max-width: 640px){
        //position: fixed;
        bottom: 20%
    }

    position: absolute;
    bottom: 5%;
    height: 5%;
    width: auto;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

`

export default CarouselDotsStyled
