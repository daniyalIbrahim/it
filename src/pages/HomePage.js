import React from 'react';
import { css } from '@emotion/react';
import MetaTags from 'react-meta-tags';
import { useThemeContext } from '../contexts/ThemeContext';
import NewsLetter from '../components/news';
import FeedCards from '../components/feed';
import Logo from '../components/logo';
import { useDate } from '../common/date';

const HomePageStyle = (colors, isLight) => css`
  margin-top: 30px;
  .logo {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  svg {
    cursor: pointer;
    color: ${isLight ? 'inherit' : colors.gray[8]};
    fill: ${colors.gray[8]};
  }
  .logo {
    cursor: pointer;
    color: ${isLight ? 'inherit' : colors.gray[8]};
    fill: ${colors.gray[8]};
  }
  .feed {
    position: relative;
    z-index: 999;
  }
  .banner {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    width: 100vw;
  }
  .banner-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .banner-logo {
    display: flex;
  }
  .title {
    padding: 10px;
  }
`;

const HomePage = () => {
  const { colors, isLight } = useThemeContext();
  const { wish, date, num, time } = useDate('en');

  return (
    <React.Fragment>
      <MetaTags>
        <title>Home | IT-BAHN &copy;</title>
      </MetaTags>
      <div css={[HomePageStyle(colors, isLight)]}>
        <div className="banner">
          <div className="banner-text">
            <h1 className="title text-focus-in ">{wish}</h1>
          </div>
          <div className="banner-logo">
            <Logo time={time} date={date}></Logo>
          </div>
        </div>
        <div className='App-header'>
          
          <div className='col'>

          </div>
          <div className='col'>

          </div>

        </div>
        <FeedCards className="feed"></FeedCards>
        <div className='App-header'>
          <div className='col'>

          </div>
          <div className='col'>

          </div>

        </div>

        <main>
          <NewsLetter></NewsLetter>
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
