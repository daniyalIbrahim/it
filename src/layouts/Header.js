import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';

import NavigationMenu from '../components/menu';
import { ReactComponent as LogoIcon } from '../assets/fig.svg';

const headerStyle = (colors, isLight) => css`
top:0;
  height: 60px;
  position: fixed;
  border-bottom: 1px solid ${isLight ? '#000' : '#fff'};
  width:100vw;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 100;

  & > nav {
    height: 100%;
    display: flex;
    padding: 0 12px;
    margin: 0 5vw;
    align-items: center;
    justify-content: space-between;
    .logo{
      font-size: 2.3rem;
      font-family: 'Ubuntu', sans-serif;
    }
   
  }
  svg {
    cursor: pointer;
    color: ${isLight ? 'inherit' : colors.yellow[4]};
    fill: ${colors.yellow[6]};
  }

  svg.theme {
    display: flex;
    user-select: none;
  }
  
`;

const Header = () => {
  const { pathname } = useLocation();
  const { colors, isLight } = useThemeContext();

  return (
    <header css={[headerStyle(colors, isLight)]}>
      <nav>
        <div className="logo">
          <Link to="/" replace={pathname === '/'}>
            <LogoIcon style={{
              width: '30px',
              height: '30px',
              marginTop: '10px',
              color: colors.gray[8],
            }}/> 
          IT-BAHN
          </Link>
        </div>
        <NavigationMenu/>
      </nav>
    </header>
  );
};

export default Header;
