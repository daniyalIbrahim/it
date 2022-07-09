import React,{useContext} from 'react';
import { css } from '@emotion/react';
import { default as WebIcon } from '../assets/online.svg';
import { default as AppIcon } from '../assets/team_up.svg';
import { default as DelIcon } from '../assets/delivery.svg';
import { default as CloudIcon } from '../assets/data.svg';
import { default as ErpIcon } from '../assets/real.svg';
import BlobDeco from '../assets/blob.svg';
import {LanguageContext } from '../containers/Language';
import Logo from '../components/logo';

const ServicesPageStyle = css`
  p {
    font-size: 1.5rem;
    text-align: justify;
  }
`;

const ServicesPage = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <React.Fragment>
        <div className='App-header'>
          <Logo></Logo>
        </div>
      <main>
        <div css={[ServicesPageStyle]}>
          <h1 className="title text-focus-in">{dictionary.services}</h1>

          <p>{dictionary.cmsg} </p>

          <br />
          <div className="row ">
            <div className="col" id="S01">
              <h2 >
                <strong>{dictionary.SO1}</strong>
              </h2>
              <br />
              <p data-aos="fade-right">
                {dictionary.SO1D}
              </p>
              <p data-aos="fade-right">
                {dictionary.SO1DA}
              </p>
            </div>
            <div
              className="col "
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={WebIcon} alt="web-development" />
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={AppIcon} alt="mobile-app-development" />
            </div>
            <div className="col">
              <h2 id="S02">
                <strong>{dictionary.SO2}</strong>
              </h2>
              <br />
              <p data-aos="fade-left">
              {dictionary.SO2D}
              </p>
              <p data-aos="fade-left">
              {dictionary.SO2DA}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 id="S03">
                <strong>{dictionary.SO3}</strong>
              </h2>
              <br />
              <p data-aos="fade-right">
              {dictionary.SO3D}  
              </p>
              <br />
              <p data-aos="fade-right">
              {dictionary.SO3DA}  
              </p>
            </div>
            <div
              className="col"
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={CloudIcon} alt="cloud development" />
            </div>
          </div>
          <div className="row">
            <div
              className="col icon"
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={DelIcon} alt="e-commerce development" />
            </div>
            <div className="col">
              <h2 id="S04">
                <strong>{dictionary.SO4}</strong>
              </h2>
              <br />
              <p data-aos="fade-left">
              {dictionary.SO4D}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br />
              <p data-aos="fade-right">
              {dictionary.SO4DA}
              </p>
            </div>
           
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ServicesPage;
