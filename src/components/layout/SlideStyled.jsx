import styled from 'styled-components'
import img from '../../assets/img/quiz_screen.jpg'

const SlideStyled = styled.div`
    display: grid;
    grid-template-columns: 1.6rem 1fr 1fr 1.6rem;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

    @media screen and (min-width: 641px){
        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;
        grid-column-gap: 1rem;
    }

    @media screen and (min-width: 1008px){
        grid-template-columns: repeat(7, 1fr);
    }
`

export default SlideStyled