import React, { useContext} from 'react'

import { SettingsContext } from '../contexts/SettingsContext'

import texts from '../assets/texts'

import Settings from './Settings';

import HeaderStyled from '../components/layout/HeaderStyled';
import TitleStyled from '../components/layout/TitleStyled';

export default function Header() {
    const {lang} = useContext(SettingsContext)    

    return (       
        <HeaderStyled>
            <TitleStyled>
            {lang === 'sv' ? texts[0].sv : texts[0].en}
            </TitleStyled>
            <Settings/>
        </HeaderStyled>
    )
}
