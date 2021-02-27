import React, {useState} from 'react'
import work from '../assets/work'
import CarouselStyled from './layout/CarouselStyled'
import Slide from './Slide'
import SlideButtonStyled from './SlideButtonStyled'

export default function Carousel() {
    const slideArr = [2,1,0]
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100)
    }
    return (
        <CarouselStyled>
            {
                slideArr.map((i, index) => {
                    return <div 
                            className="innerSlideContainer" 
                            key={index} 
                            style={{transform: `translateX(${x}%)`}}>
                                <Slide 
                                    data={work[i]}
                                />
                            </div>
                })
            }
            <SlideButtonStyled 
                side={'left'} 
                id="leftBtn"
                onClick={goLeft}
            >&#10094;</SlideButtonStyled>
            <SlideButtonStyled 
                side={'right'}
                id="rightBtn"
                onClick={goRight}
            >&#10095;</SlideButtonStyled>
        </CarouselStyled>
    )
}
