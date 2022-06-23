import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../containers/Language';

const MotiveStyle = (colors, isLight) => css`
 min-height:150vh;

`;

export default function Motive() {
  const { dictionary } = useContext(LanguageContext);
  const { colors, isLight } = useThemeContext();


  return (
    <React.Fragment>
      <div css={[MotiveStyle(colors, isLight)]}>
        <p>{dictionary.MO1}</p>
        <div className="row">
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO2}</h2>
            <p data-aos="fade-left">{dictionary.MO2D}</p>
          </div>
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO3}</h2>
            <p data-aos="fade-left">{dictionary.MO3D}</p>
          </div>
        </div>
        <div className="row">
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO4}</h2>
            <p data-aos="fade-left">{dictionary.MO4D}</p>
          </div>
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO5}</h2>
            <p data-aos="fade-left">{dictionary.MO5D}</p>
          </div>
        </div>
        <div className="row">
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO6}</h2>
            <p data-aos="fade-left">{dictionary.MO6D}</p>
          </div>
          <div className='col'>
            <h2 data-aos="fade-right">{dictionary.MO7}</h2>
            <p data-aos="fade-left">{dictionary.MO7D}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
