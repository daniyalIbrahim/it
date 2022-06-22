import React from 'react';
import { css } from '@emotion/react';
import MetaTags from 'react-meta-tags';
import { default as WebIcon } from '../assets/online.svg';
import { default as AppIcon } from '../assets/team_up.svg';
import { default as DelIcon } from '../assets/delivery.svg';
import { default as CloudIcon } from '../assets/data.svg';
import { default as ErpIcon } from '../assets/real.svg';
import BlobDeco from '../assets/blob.svg';

const ServicesPageStyle = css`
  p {
    font-size: 1.5rem;
    text-align: justify;
  }
`;

const ServicesPage = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Our Services | IT-BAHN &copy;</title>
      </MetaTags>
      <main>
        <div css={[ServicesPageStyle]}>
          <h1 className="title text-focus-in">Our Services</h1>

          <p>We provide the following services: </p>

          <br />
          <div className="row ">
            <div className="col">
              <h2>
                <strong>Web Development</strong>
              </h2>
              <br />
              <p data-aos="fade-right">
                We can build your website from scratch or we can integrate your existing website with our services.
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
              <h2>
                <strong>Mobile Application Development</strong>
              </h2>
              <br />
              <p data-aos="fade-left">
                We can build your mobile app from scratch or we can integrate your existing mobile app with our
                services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>
                <strong>Custom Cloud Applications</strong>
              </h2>
              <br />
              <p data-aos="fade-right">
                We utilize modern state-of-the-art technologies to build your product. Microservices architecture,
                containerization, and cloud computing are just a few of the technologies we use to build your product.
                We help you analyse, design, test and deploy your product.
              </p>
              <br />
              <p data-aos="fade-right">
                We can build your cloud application from scratch or we can integrate your existing cloud application
                with our services. We can undertake not only development of your product, but also assist your business
                in scaling up and maintaining your product.
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
              <h2>
                <strong>E-Commerce Platform Development</strong>
              </h2>
              <br />
              <p data-aos="fade-left">
                We can build your e-commerce solution from scratch or we can integrate your existing e-commerce solution
                with our services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>
                <strong>ERP Development</strong>
              </h2>
              <br />
              <p data-aos="fade-right">
                We can analyse, design and automate your business workflows and help you with reports generation and
                storage. We can build your ERP solution from scratch or we can integrate your existing ERP solution with
                our services.
              </p>
            </div>
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
              <img src={ErpIcon} alt="erp development" />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ServicesPage;
