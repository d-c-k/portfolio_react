import React, {useContext} from 'react'

import { SettingsContext } from '../contexts/SettingsContext'

import skills from '../assets/skills'
import texts from '../assets/texts'
import pdfSv from '../assets/cv/Daniel_Koefoed_CV_SV.pdf'
import pdfEn from '../assets/cv/Daniel_Koefoed_CV_EN.pdf'

import LineBreakText from './LineBreakText';
import SkillList from './SkillList';

import HSection1Styled from '../components/layout/HSection1Styled';
import ListBlockStyled from '../components/layout/ListBlockStyled';
import SectionTitleStyled from '../components/layout/SectionTitleStyled';
import TextBlockStyled from '../components/layout/TextBlockStyled';

export default function HorizontalSection1() {
    const {lang} = useContext(SettingsContext)
    return (
        <HSection1Styled>
            <SectionTitleStyled>
                <p>{lang === 'sv' ? texts[1].sv : texts[1].en}</p>
            </SectionTitleStyled>
            <TextBlockStyled>
                <LineBreakText text={lang === 'sv' ? texts[2].sv : texts[2].en}/>
                <br/>
                <a href={lang === 'sv' ? pdfSv : pdfEn} target="blank">&gt;&gt; CV</a>
            </TextBlockStyled>
            <ListBlockStyled>
                <SkillList list={skills}/>
            </ListBlockStyled>
        </HSection1Styled>
    )
}
  
