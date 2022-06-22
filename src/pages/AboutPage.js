import React,{useContext} from 'react';
import { css } from '@emotion/react';
import { default as ContentIcon } from '../assets/world.svg';
import { default as DecoIcon } from '../assets/creative_team.svg';
import { default as DecoIcon2 } from '../assets/instant_analysis.svg';
import { default as DecoIcon3 } from '../assets/social_thinking.svg';
import BlobDeco from '../assets/blob.svg';
import {LanguageContext } from '../containers/Language';

const AboutPageStyle = css``;

const AboutPage = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <React.Fragment>
      <div>
        <main css={[AboutPageStyle]}>
          <h1 className="title text-focus-in">{dictionary.about}</h1>
          <div className="row">
            <div className="col">
              <h2 data-aos="fade-right">
              {dictionary.AB01}
              </h2>
              <p>
                {dictionary.AB01D}
              </p>
            </div>
            <div
              className="col"
              style={{
                height: '50vh',
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={ContentIcon} alt="web-development" />
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="col icon"
              style={{
                height: '50vh',
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={DecoIcon} alt="web-development" />
            </div>
            {'  '}
            <div className="col" >
            <h2 data-aos="fade-left">
              {dictionary.AB02}
              </h2>
              <p>
                {dictionary.AB02D}
              </p>
            </div>
          </div>
          <div className="row">
            <div style={{marginTop:"5vh"}} className="col" data-aos="fade-left">
              <h2>{dictionary.AB03}</h2>
            </div>
            <div
              className="col"
              style={{
                height: '50vh',
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={DecoIcon2} alt="web-development" />
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              style={{
                height: '50vh',
                backgroundImage: `url(${BlobDeco})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
              }}
            >
              <img src={DecoIcon3} alt="web-development" />
            </div>
            <div className="col" data-aos="fade-left">
              <h2>{dictionary.AB05}</h2>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
