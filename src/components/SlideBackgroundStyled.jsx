import styled from 'styled-components'

const SlideBackgroundStyled = styled.div`   
    @media screen and (max-width: 640px){
        //scroll-snap-align: start;        
    }

    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    min-width: 100%;
    height:100%;
    position: relative;    
`

export default SlideBackgroundStyled