import React, { useState, useContext } from 'react'

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
    
    const [slideArr, setSlideArr] = useState([3, 4, 0, 1, 2])
    const [x, setX] = useState(-200)
    const [active, setActive] = useState(0)
    const [moved, setMoved] = useState(0)

    const slideTime = window.innerWidth < 1000 ? window.innerWidth : 1000

    const switchArr = (arr, direction) => {
        let tmpArr = []
        tmpArr.push(...arr)
        if(direction === "left"){
            tmpArr.unshift(tmpArr[tmpArr.length - 1])
            tmpArr.pop()
        }else if(direction === "right"){
            tmpArr.push(tmpArr[0])
            tmpArr.shift()
        }
        return tmpArr
    }

    const goLeft = () => {
        setX(-100)
        setMoved(1)

        if(active === 0){
            setActive(slideArr.length - 1)
        }else{
            setActive(active - 1)
        } 

        setTimeout(() => {
            setX(-200)
            setSlideArr(switchArr(slideArr, "left"))
            setMoved(0)
        }, slideTime)
    }

    const goRight = () => {
        setX(-300)
        setMoved(1)

        if(active === slideArr.length - 1){
            setActive(0)
        }else{
            setActive(active + 1)
        }

        setTimeout(() => {
            setX(-200)
            setSlideArr(switchArr(slideArr, "right"))
            setMoved(0)
        }, slideTime)
    }

    return (
        <CarouselStyled>
            {
                slideArr.map((i, index) => {
                    return <SlideStyled
                            key={index} 
                            slideTime={slideTime}
                            moved={moved}
                            style={{transform: `translateX(${x}%)`}}>
                                <Slide 
                                    data={work[i]}
                                />
                            </SlideStyled>
                })
            }
            <SlideButtonStyled 
                disabled={moved === 1}
                side={'left'} 
                id="leftBtn"
                onClick={goLeft}
            >&#10094;</SlideButtonStyled>
            <SlideButtonStyled 
                disabled={moved === 1}
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
                                    active={active === index ? true : false}
                                />
                    })
                }
            </CarouselDotsStyled>
        </CarouselStyled>
    )
}
