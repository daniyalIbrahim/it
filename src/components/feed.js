import React from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import cloud from '../assets/cloud.png';
import web from '../assets/istock.jpeg';
import netz from '../assets/pexels-2.jpg';
import app from '../assets/pexels-3.jpg';
import soft from '../assets/pexels.jpg';

const FeedCardsStyle = (colors, isLight) => css`
  .scroller {
    padding: 10px;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    overflow-x: auto;
    -webkit-box-shadow: 0px 14px 51px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 14px 51px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 14px 51px -8px rgba(0, 0, 0, 0.75);
  }

  .scroller::-webkit-scrollbar {
    display: none;
  }

  .scroller-item {
    position: relative;
    width: 100px;
    height: 100px;
    border: 4px solid #151515;
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
    background: #fb5ac0;
    background: -webkit-linear-gradient(147deg, #fb5ac0 0%, #3619ab 100%);
    background: linear-gradient(147deg, #fb5ac0 0%, #3619ab 100%);
    border-radius: inherit;
    z-index: -1;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    height: 50%;
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
  const [modal, setModal] = React.useState(0);
  const { colors, isLight } = useThemeContext();
  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked', e.target.name);
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
          {modal === 1 ? (
            <div className="modal" data-aos="fade-right">
              <button className="close" onClick={() => setModal(0)}>
                <span aria-hidden="true" className="cross">
                  &times;
                </span>
              </button>
              <img className="modal-img" src={cloud} alt="" />
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          ) : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={web} name="web" alt="" />
          </div>
          {modal === 2 ? (
            <div className="modal" data-aos="fade-right">
              <button className="close" onClick={() => setModal(0)}>
                <span aria-hidden="true" className="cross">
                  &times;
                </span>
              </button>
              <img className="modal-img" src={web} alt="" />
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          ) : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={netz} name="netz" alt="" />
          </div>
          {modal === 3 ? (
            <div className="modal" data-aos="fade-right">
              <button className="close" onClick={() => setModal(0)}>
                <span aria-hidden="true" className="cross">
                  &times;
                </span>
              </button>
              <img className="modal-img" src={netz} alt="" />
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          ) : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={app} name="app" alt="" />
          </div>
          {modal === 4 ? (
            <div className="modal" data-aos="fade-right">
              <button className="close" onClick={() => setModal(0)}>
                <span aria-hidden="true" className="cross">
                  &times;
                </span>
              </button>
              <img className="modal-img" src={app} alt="" />
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          ) : null}
          <div className="scroller-item">
            <img onClick={(e) => handleClick(e)} src={soft} alt="" name="soft" />
          </div>
          {modal === 5 ? (
            <div className="modal" data-aos="fade-right">
              <button className="close" onClick={() => setModal(0)}>
                <span aria-hidden="true" className="cross">
                  &times;
                </span>
              </button>
              <img className="modal-img" src={soft} alt="" />
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
