import React from 'react';
import { css } from '@emotion/react';

const PrivacyPageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
  }
`;

const PrivacyPage = () => {
  return (
    <main>
      <div css={[PrivacyPageStyle]}>
        <h1 className="title">Privacy Policy</h1>
        <br />
        <p>
          This privacy policy has been compiled to better serve those who are concerned with how their &apos;Personally
          identifiable information&apos; (PII) is being used online. PII, as described in US privacy law and information
          security, is information that can be used on its own or with other information to identify, contact, or locate
          a single person, or to identify an individual in context. Please read our privacy policy carefully to get a
          clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
        <br />
        <h2>What personal information do we collect from the people that visit our blog, website or app?</h2>
        <br />
        <p>
          When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address
          or other details to help you with your experience.
        </p>
        <br />
        <h2>When do we collect information?</h2>
        <br />
        <p>
          We collect information from you when you register on our site, place an order, subscribe to a newsletter,
          respond to a survey or marketing communication, surf the website, or use certain other site features in the
          following ways:
        </p>
        <br />
        <ul>
          <li>
            <p>
              When you visit our site, we may automatically record your IP address. We use this information to help
              diagnose problems with our server, and to administer our site.
            </p>
          </li>
          <li>
            <p>
              When you make a purchase, we collect certain information from you, including your name, billing address,
              credit card number, the date and time of your purchase, and your payment method.
            </p>
          </li>
          <li>
            <p>
              When you enter a contest, sweepstakes or promotion, we collect your contact information, and your
              information is used to notify you about the winner.
            </p>
          </li>
          <li>
            <p>When you respond to a survey, we collect your name and email address.</p>
          </li>
          <li>
            <p>When you contact us via email, we collect your name and email address.</p>
          </li>
        </ul>
        <br />
        <h2>How do we use your information?</h2>
        <br />
        <p>
          We may use the information we collect from you when you register, make a purchase, sign up for a newsletter,
          respond to a survey or marketing communication, surf the website, or use certain other site features in the
          following ways:
        </p>
        <br />
        <ul>
          <li>
            <p>To personalize your experience;</p>
          </li>
          <li>
            <p>To allow us to better service you in responding to your customer service requests.</p>
          </li>
          <li>
            <p>To administer a contest, promotion, sweepstakes or other site feature.</p>
          </li>
          <li>
            <p>To send periodic emails regarding your order or other products and services.</p>
          </li>
        </ul>
        <br />
        <h2>How do we protect your information?</h2>
        <br />
        <p>We do not use vulnerability scanning and/or scanning to PCI standards.</p>
        <br />
        <p>We only provide articles and information. We never ask for credit card numbers.</p>
        <br />
        <p>We do not use Malware Scanning.</p>
        <br />
        <p>
          Your personal information is contained behind secured networks and is only accessible by a limited number of
          persons who have special access rights to such systems, and are required to keep the information confidential.
        </p>
        <br />
        <p>
          In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL)
          technology.
        </p>
        <br />
        <p>
          We implement a variety of security measures when a user places an order enters, submits, or accesses their
          information to protect it from loss, theft, misuse, and unauthorized access, disclosure, alteration, and
          destruction.
        </p>
        <br />
        <p>We do not use cookies.</p>
        <br />
        <p>We do not use robots to track users or to index any of our pages.</p>
        <br />
        <p>We do not use web beacons or other tracking tools to track users or to index any of our pages.</p>
      </div>
    </main>
  );
};

export default PrivacyPage;
