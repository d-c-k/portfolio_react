import React, { useContext } from 'react'
import { SettingsContext } from '../contexts/SettingsContext'
import ButtonStyled from './ButtonStyled'

export default function LangSettings() {
    const {lang,setLang} = useContext(SettingsContext)
    function setSv(){
        setLang('sv')
    }
    function setEn(){
        setLang('en')
    }
    return (
        <div>
           <ButtonStyled active={lang === 'sv' ? true : false} onClick={setSv}>SV</ButtonStyled> / <ButtonStyled active={lang === 'en' ? true : false} onClick={setEn}>EN</ButtonStyled> 
        </div>
    )
}
