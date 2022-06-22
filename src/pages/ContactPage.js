import React from 'react';
import { css } from '@emotion/react';
import ContactForm from '../components/contact';
import MetaTags from 'react-meta-tags';
import JoinIcon from '../assets/join.svg';

const ContactPageStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContactPage = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact Us | IT-BAHN &copy;</title>
      </MetaTags>
      <div css={[ContactPageStyle]}>
        <h1 className="title text-focus-in">Contact Us</h1>
        <div
          style={{
            backgroundImage: `url(${JoinIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          <ContactForm></ContactForm>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
