import React from 'react'
import SingleColStyled from './layout/SingleColStyled'
import SlideBackgroundStyled from './SlideBackgroundStyled'
import SlideForegroundStyled from './SlideForegroundStyled'

export default function Slide(props) {
    return (
        <SlideBackgroundStyled image={props.data.image.desktop}>
            <SlideForegroundStyled>    
                <SingleColStyled col={2}>{props.data.title.sv}</SingleColStyled>
                <SingleColStyled col={'3/5'}>{props.data.text.sv}</SingleColStyled>
            </SlideForegroundStyled>
        </SlideBackgroundStyled>
    )
}
