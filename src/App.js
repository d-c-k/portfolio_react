import React, { useState } from 'react'

import { SettingsContext } from './contexts/SettingsContext'

import skills from './assets/skills'
import texts from './assets/texts'

import Carousel from './components/Carousel';
import LineBreakText from './components/LineBreakText';
import SkillList from './components/SkillList';

import HSection1Styled from './components/layout/HSection1Styled';
import HSection2Styled from './components/layout/HSection2Styled';
import HSection3Styled from './components/layout/HSection3Styled';
import ListBlockStyled from './components/layout/ListBlockStyled';
import MainContainerStyled from './components/layout/MainContainerStyled';
import SectionTitleStyled from './components/layout/SectionTitleStyled';
import SingleColStyled from './components/layout/SingleColStyled';
import TextBlockStyled from './components/layout/TextBlockStyled';
import TitleStyled from './components/layout/TitleStyled';
import LangSettings from './components/LangSettings';
import HeaderStyled from './components/layout/HeaderStyled';

function App() {
  const [lang, setLang] =useState('')
  const [theme, setTheme] = useState('')
  const SettingsContextValue = {
    lang, setLang,
    theme, setTheme
  }

  return (
    <SettingsContext.Provider value={SettingsContextValue}>
    <MainContainerStyled theme={theme}>
      <HeaderStyled>
        <TitleStyled>
          {lang === 'sv' ? texts[0].sv : texts[0].en}
        </TitleStyled>
          <LangSettings/>
      </HeaderStyled>

      <HSection1Styled>
        <SectionTitleStyled>
          <p>{lang === 'sv' ? texts[1].sv : texts[1].en}</p>
        </SectionTitleStyled>
        <TextBlockStyled>
          <LineBreakText text={lang === 'sv' ? texts[2].sv : texts[2].en}/>
        </TextBlockStyled>
        <ListBlockStyled>
          <SkillList list={skills}/>
        </ListBlockStyled>
      </HSection1Styled>

      <HSection2Styled>
        <Carousel/>
      </HSection2Styled>

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

    </MainContainerStyled>
    </SettingsContext.Provider>
  );
}

export default App;