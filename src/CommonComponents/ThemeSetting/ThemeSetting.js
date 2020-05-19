import React ,{useState} from 'react';

import {ThemeProvider } from 'styled-components';

import Themes from '../Themes/Theming'

const theme = {
    primaryColor :"#8dc63f"
}   

 const ThemeSetting = ({children})=>{
    const [activeState,setActiveState] = useState(-1);
    const [color, setcolor] = useState(theme);
    const colorHandler =(color,id)=>{
        setActiveState( id);
        const themes = { ...theme, primaryColor :color };
        setcolor(themes);
    }
        return(
            <ThemeProvider theme = {color}>
                {children}
                <Themes themeColorSetting = {colorHandler} activeState = {activeState}></Themes>
            </ThemeProvider>
        );
}   
export default ThemeSetting;