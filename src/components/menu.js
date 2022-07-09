import React, { useState, useEffect,useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import LanguageSelector from '../components/LanguageSelector';
import { LanguageContext } from '../containers/Language';
import { languageFlags } from '../languages';

import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import "../styles/nav.scss"

const hamburgerStyle = (colors, isLight) => css`
path {
  fill: none;
  stroke: ${colors.gray[8]};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all .8s cubic-bezier(.645, .045, .355, 1);
}
label {
  display: block;
  cursor: pointer;
  width: 100px;
  height: 100px;
}
input {
  display: none;
}
circle {
fill: #fff3;
opacity: 0;
}

label:hover circle {
opacity: 1;
}
.cross{
  position:relative;
  z-index:999;

}
.cross input:checked+svg {
.line-1,
.line-3 {
  --length: 22.627416998;

}
.line-2 {
  --length: 0;
}
}
.back input:checked+svg {
.line-1,
.line-3 {
  --length: 8.602325267;
}
}

.menu-1 {
  width:70px;
  .line-1,
  .line-3 {
    --total-length: 126.64183044433594;
  }
  .line-2 {
    --total-length: 70;
  }
  input:checked+svg {
    .line-1,
    .line-3 {
      --offset: -94.1149185097;
    }
    .line-2 {
      --offset: -50;
    }
  }
}
`;

const Hamburger = ({ openNav }) => {
  const { colors, isLight } = useThemeContext();
  return (
    <div css={[hamburgerStyle(colors, isLight)]}>
      <div className="menu cross menu-1" >
        <label>
          <input type="checkbox" onClick={openNav} />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className="line-1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line-2" d="M0 50h70" />
            <path className="line-3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div >
    </div>
  )
}

const headerStyle = (colors, isLight) => css`
font-family: 'Ubuntu', sans-serif;
  .icons,.ico{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .resp{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
    gap: 15px;
    flex-direction: column;
    width: 70vw;
    z-index:15;
    background-color:${isLight ? 'white' : 'black'};
    opacity: 0.8;
    .men-item{
      height: 40px;
      font-size: 2rem;
    }
  }
  .main-menu{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .menu-item:hover{
    border-bottom: 0.5rem solid  ${isLight ? colors.yellow[6] : colors.yellow[4]};
  }
  @media (max-width:768px){
    .main-menu,.icons{
      display:none;
    }
  }
  @media (min-width:768px){
    .resp{
      display:none;
    }
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
  }
`;


function NavigationMenu() {
  const { userLanguage, dictionary } = useContext(LanguageContext);
  
  const { pathname } = useLocation();
  const { colors, isLight, toggleTheme } = useThemeContext();
  const [respNav, openRespNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleDraw = () => openRespNav(!respNav);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  return (
    <React.Fragment>
      <div css={[headerStyle(colors, isLight)]}>
        <nav>
          <div className="main-menu">
            <Link className="menu-item" to="/" replace={pathname === '/'}>
              {dictionary.home}
            </Link>
            <Link className="menu-item" to="/about" replace={pathname === '/about'}>
              {dictionary.about}
            </Link>
            <Link className="menu-item" to="/services" replace={pathname === '/services'}>
              {dictionary.services}
            </Link>
            <Link className="menu-item" to="/contact-us" replace={pathname === '/contact-us'}>
              {dictionary.contact}
            </Link>
          </div>
          <div className='icons'>
            {isLight ? (
              <SunIcon className="theme" onClick={toggleTheme} />
            ) : (
              <MoonIcon className="theme" onClick={toggleTheme} />
            )}
            <img style={{width:"30px",height:"30px"}} src={languageFlags[userLanguage]} alt="lang flag"/>
            <LanguageSelector></LanguageSelector>
          </div>
          {(width > 780) ? <></> : <Hamburger className="ham" openNav={toggleDraw} />}
        </nav>
        {
          respNav ?
            <div className="resp anim-slide-in">
              <Link className="men-item " to="/" replace={pathname === '/'}>
                {dictionary.home}
              </Link>
              <Link className="men-item " to="/about" replace={pathname === '/about'}>
                {dictionary.about}
              </Link>
              <Link className="men-item " to="/services" replace={pathname === '/services'}>
                {dictionary.services}
              </Link>
              <Link className="men-item " to="/contact-us" replace={pathname === '/contact-us'}>
                {dictionary.contact}
              </Link>
              <div className='ico'>
                {isLight ? (
                  <SunIcon className="theme" onClick={toggleTheme} />
                ) : (
                  <MoonIcon className="theme" onClick={toggleTheme} />
                )}
                <img style={{ width: "30px", height: "30px" }} src={languageFlags[userLanguage]} alt="lang flag" />
                <LanguageSelector></LanguageSelector>
              </div>
            </div>
            :
            <>
            </>
        }
      </div >
    </React.Fragment>
  );
};

export default NavigationMenu;