import React, {useContext} from 'react'

import { SettingsContext } from '../contexts/SettingsContext'

import texts from '../assets/texts'

import SlideBackgroundStyled from './SlideBackgroundStyled'
import SlideForegroundStyled from './SlideForegroundStyled'

import ListBlockStyled from './layout/ListBlockStyled'
import SectionTitleStyled from './layout/SectionTitleStyled'
import SlideGridStyled from './layout/SlideGridStyled'
import TextBlockStyled from './layout/TextBlockStyled'

export default function Slide(props) {
    const {lang, theme} = useContext(SettingsContext)
    return (
        <SlideBackgroundStyled image={props.data.image.desktop}>
            <SlideForegroundStyled theme={theme}>    
                <SlideGridStyled>
                    <SectionTitleStyled>
                        {lang === 'sv' ? props.data.title.sv : props.data.title.en}
                    </SectionTitleStyled>
                    <TextBlockStyled>
                        {lang === 'sv' ? props.data.text.sv : props.data.text.en}
                    </TextBlockStyled>
                    <ListBlockStyled>
                        <a href={props.data.links.page} target="blank">
                            &gt;&gt; {lang === 'sv' ? texts[4].sv : texts[4].en}
                        </a><br/>
                        <a href={props.data.links.repo} target="blank">
                            &gt;&gt; {lang === 'sv' ? texts[5].sv : texts[5].en}
                        </a>
                    </ListBlockStyled>
                </SlideGridStyled>
            </SlideForegroundStyled>
        </SlideBackgroundStyled>
    )
}
