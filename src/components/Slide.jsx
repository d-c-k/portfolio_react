import React from 'react'
import texts from '../assets/texts'
import ListBlockStyled from './layout/ListBlockStyled'
import SectionTitleStyled from './layout/SectionTitleStyled'
import SlideGridStyled from './layout/SlideGridStyled'
import TextBlockStyled from './layout/TextBlockStyled'
import SlideBackgroundStyled from './SlideBackgroundStyled'
import SlideForegroundStyled from './SlideForegroundStyled'

export default function Slide(props) {
    return (
        <SlideBackgroundStyled image={props.data.image.desktop}>
            <SlideForegroundStyled>    
                <SlideGridStyled>
                    <SectionTitleStyled>
                        {props.data.title.sv}
                    </SectionTitleStyled>
                    <TextBlockStyled>
                        {props.data.text.sv}
                    </TextBlockStyled>
                    <ListBlockStyled>
                        <a href={props.data.links.page} target="blank">&gt;&gt; {texts[4].sv}</a><br/>
                        <a href={props.data.links.repo} target="blank">&gt;&gt; {texts[5].sv}</a>
                    </ListBlockStyled>
                </SlideGridStyled>
            </SlideForegroundStyled>
        </SlideBackgroundStyled>
    )
}
