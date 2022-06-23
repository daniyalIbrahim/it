import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import cloud from '../assets/cloud.png';
import web from '../assets/istock.jpeg';
import netz from '../assets/pexels-2.jpg';
import app from '../assets/pexels-3.jpg';
import soft from '../assets/pexels.jpg';
import { LanguageContext } from '../containers/Language';


const FeedCardsStyle = (colors, isLight) => css`
  .scroller {
    padding: 10px;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    overflow-x: auto;
    box-shadow: 0px 35px 17px 5px rgba(0,0,0,0.1),0px -28px 37px -3px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    gap:5vw;
  }

  .scroller::-webkit-scrollbar {
    display: none;
  }

  .scroller-item {
    position: relative;
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  .scroller-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .scroller-item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 15px);
    height: calc(100% + 15px);
    background: #c2e59c;
    background: -webkit-linear-gradient(147deg, #c2e59c 0%, #64b3f4 100%);
    background: linear-gradient(147deg, #c2e59c 0%, #64b3f4 100%);
    border-radius: inherit;
    z-index: -1;
    
  }
  .scroller-item::before , .scroller-item img{
    margin-left:5vw;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    scroll-behavior: smooth;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    z-index: 9999;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border: none;
  }
  .cross {
    font-size: 45px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  .modal-img {
    width: 100%;
    height: 30%;
    margin-top: 10vh;
  }
  p {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export default function FeedCards() {
  const { dictionary } = useContext(LanguageContext);
  const [modal, setModal] = React.useState(0);
  const { colors, isLight } = useThemeContext();
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.name === 'cloud') {
      setModal(1);
    }
    if (e.target.name === 'web') {
      setModal(2);
    }
    if (e.target.name === 'netz') {
      setModal(3);
    }
    if (e.target.name === 'app') {
      setModal(4);
    }
    if (e.target.name === 'soft') {
      setModal(5);
    }
  };

  return (
    <React.Fragment>
      <div css={[FeedCardsStyle(colors, isLight)]}>
        <div className="scroller">
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} name="cloud" src={cloud} alt="" />
          </div>
          {modal === 1 ? <ModalWindow setModal={setModal} imgPath={cloud} title={dictionary.SO1} desc={dictionary.SO1D} /> : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={web} name="netz" alt="" />
          </div>
          {modal === 2 ? <ModalWindow setModal={setModal} imgPath={netz} title={dictionary.SO2} desc={dictionary.SO2D} /> : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={netz} name="web" alt="" />
          </div>
          {modal === 3 ? <ModalWindow setModal={setModal} imgPath={web} title={dictionary.SO3} desc={dictionary.SO3D} /> : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={app} name="app" alt="" />
          </div>
          {modal === 4 ? <ModalWindow setModal={setModal} imgPath={app} title={dictionary.SO4} desc={dictionary.SO4D + "\n" + dictionary.SO4DA} /> : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const ModalWindow = ({ setModal, imgPath, title, desc }) => {

  return (
    <div className="modal" data-aos="fade-right">
      <button className="close" onClick={() => setModal(0)}>
        <span aria-hidden="true" className="cross">
          &times;
        </span>
      </button>
      <img className="modal-img" src={imgPath} alt="" />
      <h1>{title}</h1>
      <p>
        {desc}
      </p>
    </div>
  )

}