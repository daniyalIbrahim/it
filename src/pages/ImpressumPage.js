import React,{useContext} from 'react';
import { css } from '@emotion/react';
import {LanguageContext } from '../containers/Language';
const ImpressumPageStyle = css`
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

  @media (max-width: 300px) {
    h1 {
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
    }
    h2 {
      font-size: 14px;
      font-weight: 300;
      text-align: left;
    }
    p {
      font-size: 1.5rem;
      font-weight: 200;
      text-align: justify;
    }
  }
`;

const ImpressumPage = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <main>
      <div css={[ImpressumPageStyle]}>
        <h1 className="title">{dictionary.impress}</h1>
        <h2>Information regarding the company</h2>
        <br />
        <p>SMR GROUP Spółka z ograniczoną odpowiedzialnością</p>
        <br />
        <p>NIP:5833418714</p>
        <br />
        <h2>Contact:</h2>
        <br />
        <p>ul. J. Heweliusza 11/811 80-890 Gdańsk</p>
        <br />
        <p>Telefon: +49</p>
        <br />
        E-Mail:
        <a href="mailto:contact@it-bahn.com?subject=Request%20For%20Information">contact@it-bahn.com</a>
        <br />
        <br />
        <h2>Disclaimer</h2>
        <br />
        <p>
          The information provided on this website is for informational purposes only. The information is not intended
          to be a substitute for professional advice.
        </p>
        <br />
        <h2>Copyright</h2>
        <br />
        <p>
          All content on this website is the intellectual property of Techonomy Labs. The content is protected by
          copyright and other laws.
        </p>
        <br />
        <h2>Trademarks</h2>
        <br />
        <p>The following trademarks are used on this website:</p>
        <br />
        <p>
          <strong>IT-BAHN</strong>
        </p>
        <br />
      </div>
    </main>
  );
};

export default ImpressumPage;
