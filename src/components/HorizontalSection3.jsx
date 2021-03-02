import React, {useContext} from 'react'

import { SettingsContext } from '../contexts/SettingsContext'

import texts from '../assets/texts'

import HSection3Styled from '../components/layout/HSection3Styled';
import SectionTitleStyled from '../components/layout/SectionTitleStyled';
import SingleColStyled from '../components/layout/SingleColStyled';

export default function HorizontalSection3() {
    const {lang} = useContext(SettingsContext)
    return (
        <HSection3Styled>
            <SectionTitleStyled>
                <p>{lang === 'sv' ? texts[3].sv : texts[3].en}</p>
            </SectionTitleStyled>
            <SingleColStyled col={2}>
                <p>dc.koefoed@gmail.com<br/>(+46)70 - 755 06 60</p>
            </SingleColStyled>
            <SingleColStyled col={3}>
                <a href="https://www.linkedin.com/in/daniel-koefoed-647306a8/" target="blank">&gt;&gt; Linkedin</a><br/>
                <a href="https://github.com/d-c-k" target="blank">&gt;&gt; GitHub</a>
            </SingleColStyled>
        </HSection3Styled>
    )
}
