import React, { useContext } from 'react';
import {css} from "@emotion/react";
import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';
import { useThemeContext } from '../contexts/ThemeContext';




const LangSelectStyle =(colors,isLight)=>css`
margin-left:10px;
  .select {
    background-color:transparent;
    color: ${isLight ? 'inherit' : colors.gray[8]};
    border-radius:0%;
    height:5vh;
    width:40px;
    margin-right:10px;
  }
  select option {
    background-color: transparent;
    color: black; 
    justify-content: center;
    align-items:center;
  }
`;

export default function LanguageSelector() {
  const {colors,isLight} = useThemeContext();
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  return (
    <div css={[LangSelectStyle(colors,isLight)]}>
    <select
        onChange={handleLanguageChange}
        value={userLanguage}
        className="select"
      >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
    </div>
  );
};
