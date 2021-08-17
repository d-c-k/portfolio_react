import React, {useState, useContext} from 'react'

import { SettingsContext } from '../contexts/SettingsContext'

import work from '../assets/work'

import CarouselDotsStyled from './CarouselDotsStyled'
import DotStyled from './DotStyled'
import Slide from './Slide'
import SlideButtonStyled from './SlideButtonStyled'
import SlideStyled from './SlideStyled'

import CarouselStyled from './layout/CarouselStyled'

export default function Carousel() {
    const {theme} = useContext(SettingsContext)
//     const slideArr = [0, 1, 2, 3, 4]
    const [slideArr, setSlideArr] = useState([4, 0, 1, 2, 3])
    const [x, setX] = useState(-100)
    const [active, setActive] = useState(0)
//     const goLeft = () => {
//         x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100)
//         active === 0 ? setActive(slideArr.length - 1) : setActive(active - 1)
//     }
    const goLeft = () => {
      setX(0)

      let tmpArr = []
      tmpArr.push(...slideArr)
      tmpArr.unshift(tmpArr[tmpArr.length - 1])
      tmpArr.pop()

        if(active === 0){
            setActive(4)
//             setX(-100 * 4)
//             setTimeout(() => {setSlideArr([3, 4, 0, 1, 2 ]);}, 700)

        }else{
            setActive(active - 1)
//             setX(x+100)
//             setTimeout(() => {setSlideArr([0, 1, 2, 3, 4]);}, 700)
        } 

       setTimeout(() => {setX(-100); setSlideArr(tmpArr)}, 700)
//        setTimeout(function() {setX(-100);},1400)

        console.log("x = " + x)
        console.log("active = " + active)
        console.log(slideArr)
    }
    const goRight = () => {
        x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100)
        active === slideArr.length - 1 ? setActive(0) : setActive(active + 1)
    }
    return (
        <CarouselStyled>
            {
                slideArr.map((i, index) => {
                    return <SlideStyled
//                            className="innerSlideContainer" 
                            key={index} 
                            style={{transform: `translateX(${x}%)`}}>
                                <Slide 
                                    data={work[i]}
                                />
                            </SlideStyled>
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
            <CarouselDotsStyled>
                {
                    slideArr.map((item, index) => {
                        return <DotStyled 
                                    key={index} 
                                    color={theme === 'light' ? 'black' : 'white'}
                                    active={active === item ? true : false}
                                />
                    })
                }
            </CarouselDotsStyled>
        </CarouselStyled>
    )
}
