import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { postNewsLetterData } from '../api/helper';
import useAnalyticsEventTracker from '../api/analytics';
import { default as Toggle } from '../assets/toggle.svg';

const NewsLetterStyle = (colors, isLight) => css`
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .input-group {
    margin-top: 50px;
  }

  label {
    top: -30px;
    left: -26px;
    line-height: 16px;
    display: inline-flex;
    column-gap: 10px;
    align-items: center;
    transition: transform 0.25s, opacity 0.25s;
  }


  

  .input-group:focus-within label::before {
    opacity: 1;
    transition-delay: 0.1s;
  }

  input {
    width: 95%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    font: inherit;
  }

  input::placeholder {
    transition: opacity 0.25s;
  }

  input:focus::placeholder {
    opacity: 0;
  }
  
  .send-btn {
    background-color: transparent;
    color: ${colors.gray[8]};
    cursor: pointer;
    broder-color: ${isLight} ? '#ffffff' : '#000000';
    width:80px;
    height: 40px;
  }
 
  .check{
    width: 20px;
    height: 20px;
  }

`;

export default function NewsLetter() {
  const { colors, isLight } = useThemeContext();
  const gaEventTracker = useAnalyticsEventTracker('NEWS LETTER');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const promoCheckboxRef = useRef(null);
  const [formData, setformData] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      promo: promoCheckboxRef.current.value,
    };
    if (data.name && data.email && data.promo) {
      setformData(JSON.stringify(data));
    } else {
      alert('Please fill out all fields');
    }
  };

  React.useEffect(() => {
    if (formData !== '') {
      postNewsLetterData(formData);
    }
  }, [formData]);

  return (
    <React.Fragment>
      <div css={[NewsLetterStyle(colors, isLight)]}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Subscribe to our Newsletter</h2>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="name" placeholder="your name..." id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input ref={emailRef} type="email" placeholder="email@domain.com" id="email" />
          </div>
          <p>We&apos;ll never share your email with anyone else.</p>

          <div className="input-group">
            <input type="checkbox" ref={promoCheckboxRef} name="checkbox" className="check" />
            <label htmlFor="email">Recieve Promotional &amp; Marketing Emails</label>
          </div>

          <br />
          <button type="submit" onClick={() => gaEventTracker('news-letter')} className="send-btn">
            send
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
