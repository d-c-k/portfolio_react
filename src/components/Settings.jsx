import React, { useContext } from 'react'
import texts from '../assets/texts'
import { SettingsContext } from '../contexts/SettingsContext'
import ButtonStyled from './ButtonStyled'
import SettingsDivStyled from './layout/SettingsDivStyled'

export default function Settings() {
    const {lang, setLang, theme, setTheme} = useContext(SettingsContext)
    function setSv(){
        setLang('sv')
    }
    function setEn(){
        setLang('en')
    }
    function switchTheme(){
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return (
        <SettingsDivStyled>
           <ButtonStyled active={lang === 'sv' ? true : false} onClick={setSv}>
               SV
            </ButtonStyled> / <ButtonStyled active={lang === 'en' ? true : false} onClick={setEn}>
                EN
            </ButtonStyled> | <ButtonStyled onClick={switchTheme}>{lang === 'sv' ? texts[6].sv : texts[6].en}</ButtonStyled>
        </SettingsDivStyled>
    )
}
