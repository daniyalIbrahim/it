import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { postFormData } from '../api/helper';
import useAnalyticsEventTracker from '../api/analytics';

const ContactStyle = (colors, isLight) => css`
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  .fieldset {
    position: relative;
  }

  .input {
    width: 60vw;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font: inherit;
    color: ${colors.gray[8]};
    background-color: ${colors.gray[1]};
    outline: 2px solid ${colors.gray[8]};
  }
  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, 10px);
    transform-origin: left;
    transition: transform 0.25s;
    font-size: 1.2rem;
  }

  .input:focus ~ .input-label,
  .input:valid ~ .input-label {
    transform: translate(0, -30px) scale(0.8);
    color: ${colors.gray[8]};
  }
  .input:is(:focus, :valid) {
    outline-color: ${colors.gray[8]};
  }
  .column {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
  }
  .send-btn {
    background-color: transparent;
    color: ${colors.gray[8]};
    cursor: pointer;
    border: none;
  }
`;

const ContactForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const gaEventTracker = useAnalyticsEventTracker('Contact Form');
  const { colors, isLight } = useThemeContext();
  const [formData, setFormData] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    if (data.firstName && data.lastName && data.email && data.message) {
      setFormData(JSON.stringify(data));
    } else {
      alert('Please fill out all fields');
    }
  };

  React.useEffect(() => {
    if (formData !== '') {
      postFormData(formData);
    }
  }, [formData]);

  return (
    <div css={[ContactStyle(colors, isLight)]}>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="column">
          <div className="fieldset">
            <input type="text" name="firstName" className="input" tabIndex="1" ref={firstNameRef} />
            <label className="input-label" htmlFor="firstName">
              First name
            </label>
          </div>
          <div className="fieldset">
            <input type="text" name="lastName" className="input" tabIndex="2" ref={lastNameRef} />
            <label className="input-label" htmlFor="lastName">
              Last name
            </label>
          </div>
          <div className="fieldset">
            <input type="email" name="email" id="email" className="input" tabIndex="3" ref={emailRef} />
            <label className="input-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="fieldset">
            <textarea className="input" name="message" ref={messageRef} rows={7} />
            <label className="input-label" htmlFor="message">
              Message
            </label>
          </div>
          <button onClick={() => gaEventTracker('send contact')} className="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
