import styled from 'styled-components'

import zero from '../assets/img/chat-app_screen.jpg'
import one from '../assets/img/react_crud_screen.jpg'
import two from '../assets/img/audioplayer_screen.jpg'
import three from '../assets/img/quiz_screen.jpg'

const SlideBackgroundStyled = styled.div`   
    @media screen and (max-width: 640px){
        //scroll-snap-align: start;        
    }

    background-image: url(${props => 
        props.imageIndex === '0' 
        ? 
        zero 
        : 
        props.imageIndex === '1'
        ?
        one
        :
        props.imageIndex === '2' 
        ? 
        two 
        : 
        three});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    min-width: 100%;
    height:100%;
    position: relative;    
`

export default SlideBackgroundStyled