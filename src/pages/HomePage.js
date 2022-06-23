import React, { useContext } from 'react';
import { Text } from '../containers/Language';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import FeedCards from '../components/feed';
import { useDate } from '../common/date';
import { LanguageContext } from '../containers/Language';
import NewsLetter from '../components/news';
import Logo from '../components/logo';
import Motive from "../components/motive"

const HomePageStyle = (colors, isLight) => css`
  margin-top: 30px;
  svg {
    cursor: pointer;
    color: ${isLight ? 'inherit' : colors.gray[8]};
    fill: ${colors.gray[8]};
  }
  .logo {
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${isLight ? 'inherit' : colors.gray[8]};
    fill: ${colors.gray[8]};
  }
  .feed {
    position: relative;
    z-index: 999;
  }
  @media (min-width: 768px) {
    .col{
      max-width:50%;
    }
  }
`;

const HomePage = () => {
  const { colors, isLight } = useThemeContext();
  const { wish } = useDate('en');
  const { dictionary } = useContext(LanguageContext);

  return (
    <React.Fragment>
      <div css={[HomePageStyle(colors, isLight)]}>
        <div className='App-header'>
          <Logo ></Logo>

        </div>
        <main>
          <h1 className="text-focus-in">{wish}</h1>
          <h2><Text tid={"expertise"}></Text></h2>
          <br />
          <p>
            {dictionary.AB04}
          </p>
          <h2>{dictionary.AB05}</h2>
          <br />
          <br />
          <Motive />
          <br />
          <FeedCards className="feed"></FeedCards>
          <hr />
          <NewsLetter ></NewsLetter>
          <br />
          <hr />
        </main>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.0258570176816!2d18.64792111561551!3d54.35652408020315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73741018198f%3A0x953c01b8466c76f3!2sOrganika%20Trade%20building%20in%20Gda%C5%84sk%2C%20Jana%20Heweliusza%2011%2C%2080-890%20Gda%C5%84sk%2C%20Poland!5e0!3m2!1sen!2sde!4v1655435095330!5m2!1sen!2sde' width='100%' height='300px' style='margin-top:40px;border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
