import React from 'react';
import { css, Global } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';
import { useThemeContext } from '../contexts/ThemeContext';

const globalStyle = (colors) => css`
  body {
    color: ${colors.gray[9]};
    background: ${colors.gray[1]};
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: border, background, color;
  }
`;

const AppLayout = ({ children }) => {
  const { colors } = useThemeContext();

  return (
    <>
      <Global styles={[globalStyle(colors)]} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
