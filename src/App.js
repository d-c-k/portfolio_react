import React from 'react'

import texts from './assets/texts'
import skills from './assets/skills'

import MainContainerStyled from './components/layout/MainContainerStyled';
import TitleStyled from './components/layout/TitleStyled';
import HSection1Styled from './components/layout/HSection1Styled';
import SectionTitleStyled from './components/layout/SectionTitleStyled';
import TextBlockStyled from './components/layout/TextBlockStyled';
import ListBlockStyled from './components/layout/ListBlockStyled';
import SkillList from './components/SkillList';
import HSection2Styled from './components/layout/HSection2Styled';
import HSection3Styled from './components/layout/HSection3Styled';
import SingleColStyled from './components/layout/SingleColStyled';
import Carousel from './components/Carousel';

function App() {
  const lang = 'sv'
  const theme = 'dark'

  return (
    <MainContainerStyled theme={theme}>
      <TitleStyled>
        <p>{lang === 'sv' ? texts[0].sv : texts[0].en}</p>
      </TitleStyled>
      <HSection1Styled>
        <SectionTitleStyled>
          <p>{lang === 'sv' ? texts[1].sv : texts[1].en}</p>
        </SectionTitleStyled>
        <TextBlockStyled>
          <p>{lang === 'sv' ? texts[2].sv : texts[2].en}</p>
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
          <a href="https://www.linkedin.com/in/daniel-koefoed-647306a8/">&gt;&gt; Linkedin</a><br/>
          <a href="https://github.com/d-c-k">&gt;&gt; GitHub</a>
        </SingleColStyled>
      </HSection3Styled>
    </MainContainerStyled>
  );
}

export default App;