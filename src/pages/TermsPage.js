import React from 'react';
import { css } from '@emotion/react';
import { media } from '../styles/media';

const TermsPageStyle = css`
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
  ${media.small} {
    h1 {
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;

const TermsPage = () => {
  return (
    <main>
      <div css={[TermsPageStyle]}>
        <h1 className="title">Terms &amp; Conditions</h1>
        <br />
        <p>
          These terms and conditions outline the rules and regulations for the use of SMR GROUP Spółka z ograniczoną
          odpowiedzialnością products.
        </p>
        <br />
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use SMR GROUP
          Spółka z ograniczoną odpowiedzialnością if you do not agree to take all of the terms and conditions stated on
          this page.
        </p>
        <br />
        <p>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
          all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person logged on
          this website and compliant to the Company’s terms and conditions. &quot;SMR GROUP Spółka z ograniczoną
          odpowiedzialnością&quot;,&quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
          &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to
          both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most appropriate manner for the express
          purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance
          with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the
          singular, plural, capitalization and/or hegemonic forms shall be taken to mean they have been introduced into
          this License by reference.
        </p>
        <br />
        <h2>Your acceptance of these terms</h2>
        <br />
        <p>
          By accessing this website, you accept these terms and conditions in full. You must read these terms and
          conditions before accessing any part of our website. Do not continue to use SMR GROUP Spółka z ograniczoną
          odpowiedzialnością if you do not accept all of the terms and conditions stated on this page.
        </p>
        <br />
        <h2>Our responsibilitys for our website</h2>
        <br />
        <p>
          SMR GROUP Spółka z ograniczoną odpowiedzialnością is committed to ensuring that the website is available 24/7.
          However, SMR GROUP Spółka z ograniczoną odpowiedzialnością may be unable to monitor or advise you of changes
          to the website, or to the information available on the website, or for any other reason. Therefore, we advise
          you to check regularly for any changes to the website.
        </p>
        <br />
        <h2>Your information</h2>
        <br />
        <p>We may collect information about you when you:</p>
        <br />
        <ul>
          <li>
            <p>Register on our site</p>
          </li>
          <li>
            <p>Place an order</p>
          </li>
          <li>
            <p>Use our service</p>
          </li>
          <li>
            <p>Subscribe to a newsletter</p>
          </li>
          <li>
            <p>Participate in a contest, promotion, sweepstake or other site feature</p>
          </li>
          <li>
            <p>Respond to a survey</p>
          </li>
          <li>
            <p>Contact us via email</p>
          </li>
        </ul>
        <br />
        <p>We may collect the following information:</p>
        <br />
        <ul>
          <li>
            <p>Your name</p>
          </li>
          <li>
            <p>Your email address</p>
          </li>
          <li>
            <p>Your phone number</p>
          </li>
          <li>
            <p>Your address</p>
          </li>
          <li>
            <p>Your age</p>
          </li>
        </ul>
        <br />
        <p>We may use the information that we collect to:</p>
        <br />
        <ul>
          <li>
            <p>To personalise your experience</p>
          </li>
          <li>
            <p>To allow us to better service you in responding to your customer service requests</p>
          </li>
          <li>
            <p>To analyse the usage of our website</p>
          </li>
          <li>
            <p>To improve our website</p>
          </li>
          <li>
            <p>To contact you about your order</p>
          </li>
        </ul>
        <br />
        <p>
          Your information is safe and secure. We will not share your information with any other organisations or
          individuals for any reason.
        </p>
        <br />
        <h2>Cookies</h2>
        <br />
        <p>We may use cookies to monitor the performance of our website.</p>
        <br />
        <p>
          Cookies are small files which are placed on your computer, and which often include an anonymous unique
          identifier. Cookies are used in some areas of our website to enable the functionality of this area and ease of
          use for those people visiting. Some of our affiliate partners may also use cookies.
        </p>
        <br />
        <p>Cookies can be used to:</p>
        <br />
        <ul>
          <li>
            <p>
              Compile aggregate data about site traffic and site interaction so that we can offer better services and
              features in the future.
            </p>
          </li>
          <li>
            <p>Allow us to remember you when you are logged in.</p>
          </li>
          <li>
            <p>Allow us to remember your preferences when you visit our website.</p>
          </li>
          <li>
            <p>Allow us to process your transactions.</p>
          </li>
        </ul>
        <br />
        <p>
          You can choose to disable cookies by activating the setting on your browser. However, this can prevent you
          from taking full advantage of the website. It may also affect the functionality of the website and/or make it
          unusable.
        </p>
        <br />
        <h2>Security</h2>
        <br />
        <p>
          We are committed to ensuring that your information is secure. In order to prevent unauthorised access or
          disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and
          secure the information we collect online.
        </p>
        <br />
        <h2>Your rights</h2>
        <br />
        <p>If you are a registered user of our website, you may:</p>
        <br />
        <ul>
          <li>
            <p>Request us to correct any information you have provided us</p>
          </li>
          <li>
            <p>Request us to contact you regarding your order</p>
          </li>
          <li>
            <p>Request us to cancel your order</p>
          </li>
          <li>
            <p>Request us to suspend or cancel your account</p>
          </li>
          <li>
            <p>Request us to send you marketing information</p>
          </li>
          <li>
            <p>Withdraw your consent for us to contact you about your order</p>
          </li>
        </ul>
        <br />
        <p>
          If you are a visitor to our website and would like to contact us, please email us at :
          <a href="mailto:contact@it-bahn.com?subject=Requesting%20Information%20about%20Terms&body=Dear%20IT-Bahn%0A%0A%0A%0A%0ABest%20Regards">
            {' '}
            contact@it-bahn.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default TermsPage;
