import React,{useState,useRef} from "react";
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';

const NewsLetterStyles = (colors, isLight) => css`

form{
    padding: 10px 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
button{
    background-color: transparent;
    color: ${colors.gray[1]};
    width: 30%;
    padding: 10px;
    cursor: pointer;
}
button:hover{
    background-color: ${colors.gray[1]};
    color: ${colors.gray[0]};
}
fieldset{
    border:none;
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
}
.text-input{
    background-color: transparent;
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid ${colors.gray[1]};
}
.check-btn{
    background-color: transparent;
    color: ${colors.gray[1]};
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
fieldset:nth-of-type(3){
    display: flex;
    flex-direction: row;
    font-size: 14px;
}
p{
    font-size: 12px;
}
`;

export default function NewsLetterPage() {
    const { isLight, colors } = useThemeContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const handleSubmit = () => {
      
    }

    return (
        <React.Fragment>
            <div css={[NewsLetterStyles(colors, isLight)]}>
                <form onSubmit={handleSubmit()}>
                    <fieldset>
                        <label htmlFor="name">Name</label>
                        <input className="text-input" type="text" id="name" />
                    </fieldset>
                    <br/>
                    <fieldset>
                        <label htmlFor="email">Email*</label>
                        <input className="text-input" type="email" id="email"/>
                    </fieldset>
                    <p>*We will not share your email with anyone!</p>
                    <br/>
                    <fieldset>
                        <input className="check-btn" type="checkbox" id="promotions"/>
                        <label htmlFor="promotions">Recieve promotions and marketing emails</label>
                    </fieldset>
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </React.Fragment>
    )
}