import React, { useState } from 'react'

import { SettingsContext } from './contexts/SettingsContext'

import Header from './components/Header';
import HorizontalSection1 from './components/HorizontalSection1';
import HorizontalSection2 from './components/HorizontalSection2';
import HorizontalSection3 from './components/HorizontalSection3';

import MainContainerStyled from './components/layout/MainContainerStyled';

function App() {
  const [lang, setLang] =useState('sv')
  const [theme, setTheme] = useState('')
  const SettingsContextValue = {
    lang, setLang,
    theme, setTheme
  }

  return (
    <SettingsContext.Provider value={SettingsContextValue}>
      <MainContainerStyled theme={theme}>

        <Header/>

        <HorizontalSection1/>

        <HorizontalSection2/>
        
        <HorizontalSection3/>

      </MainContainerStyled>
    </SettingsContext.Provider>
  );
}

export default App;