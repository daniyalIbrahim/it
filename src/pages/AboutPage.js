import React from 'react';
import { css } from '@emotion/react';
import MetaTags from 'react-meta-tags';
import { default as ContentIcon } from '../assets/world.svg';
import { default as DecoIcon } from '../assets/creative_team.svg';
import { default as DecoIcon2 } from '../assets/instant_analysis.svg';
import { default as DecoIcon3 } from '../assets/social_thinking.svg';
import BlobDeco from '../assets/blob.svg';

const AboutPageStyle = css``;

const AboutPage = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>About Us | IT-BAHN &copy;</title>
      </MetaTags>
      <div>
        <h1 className="title text-focus-in">About Us</h1>
        <main css={[AboutPageStyle]}>
          <div className="row">
            <div className="col">
              <h2 data-aos="fade-right">
                We strive for excellence in all our work. We are a team of dedicated young professionals and engineers
                who are passionate about technology.
              </h2>
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
            <div className="col" data-aos="fade-left">
              <h2>
                We have a track record of providing high quality services to our clients. We are a team of dedicated and
                passionate individuals who are passionate about technology.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col" data-aos="fade-left">
              <h2>We have a track record of providing high quality services to our clients.</h2>
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
              <h2>We are a team of dedicated and passionate individuals who are passionate about technology.</h2>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
