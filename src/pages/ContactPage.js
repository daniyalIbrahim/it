import React, { useContext } from 'react';
import { css } from '@emotion/react';
import ContactForm from '../components/contact';
import JoinIcon from '../assets/join.svg';
import Logo from '../components/logo';
import { useDate } from '../common/date';
import {LanguageContext } from '../containers/Language';



const ContactPageStyle = css`

.logo{
  display:none;
}
`;

const ContactPage = () => {

  const { wish, date, time } = useDate('en');

  const { dictionary } = useContext(LanguageContext);

  return (
    <React.Fragment>
      <div css={[ContactPageStyle]}>
    
      <div className='App-header'>
      <Logo time={time} date={date}></Logo>
      <h1 className="text-focus-in">{wish}</h1>
      </div>
     
        <div
          style={{
            backgroundImage: `url(${JoinIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundSize: 'contain',
            height: '30vh'
          }}
        >
        </div>
        <h2 style={{marginLeft:"5vw"}}>{time}</h2>
        <h2 style={{marginLeft:"5vw"}}>{date}</h2>
        <h1 className="text-focus-in" style={{textAlign:"center"}}>{dictionary.contact}</h1>
        
      <main>
      <p>{dictionary.cmsg}</p>
      <ContactForm></ContactForm>
     </main>
       
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
