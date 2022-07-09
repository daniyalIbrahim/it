import React,{useContext} from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../containers/Language';

import { default as DevP } from '../assets/dev_productivity.svg';
import { default as SocialT } from '../assets/social_thinking.svg';
import { default as SolMind } from '../assets/solution_mindset.svg';

import { default as CloudH } from '../assets/cloud_hosting.svg';
const CardsStyle = (colors,isLight) => css`

.wrap {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
    gap:20px;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	    -ms-flex-direction: row;
	        flex-direction: row;

}

.box {
    background: ${colors.gray[0]};
    color:inherit;
	cursor:pointer;
	width: 300px;
	height: 490px;
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
	border-radius: 3px;
    border:none;
	-webkit-transition: 200ms ease-in-out;
	-o-transition: 200ms ease-in-out;
	transition: 200ms ease-in-out;
	-webkit-box-shadow: 0 0 15px rgba(0,0,0,0.3);
	box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.box:hover {
	margin-bottom: -10px;
	-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.7);
	box-shadow: 0 0 5px rgba(0,0,0,0.7);
    opacity: 0.6;
}
&  .box:hover >{
 
}
.text{
    display: none;
    font-size: 15px;
    padding: 0px 10px;
    select-text: none;
}
h1{
    font-size: 20px;
}

`;


export default function Cards() {
    const { dictionary } = useContext(LanguageContext);
    const { colors, isLight } = useThemeContext();
    return (
        <React.Fragment>,
            <div css={[CardsStyle(colors, isLight)]}>
                    <div className="wrap">
                        <a className="box"
                            style={{
                              
                                backgroundImage: `url(${CloudH})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                              }}
                              href="/services"
                            >
                            <h1>{dictionary.SO4}</h1>
                           <p className="text">
                              	{dictionary.SO4D}
                           </p>
                        </a>
                        <a className="box "
                            style={{
                              
                                backgroundImage: `url(${DevP})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                              }}
                              href="/services"
                            >
                            <h1>{dictionary.SO1}</h1>
                           <p className="text">
                                {dictionary.SO1D}
                           </p>
                        </a>
                        <a className="box "
                            style={{
                              
                                backgroundImage: `url(${SolMind})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                              }}
                              href="/services"
                            >
                            <h1>{dictionary.SO2}</h1>
                           <p className="text">
                           {dictionary.SO2D}
                           </p>
                        </a>
                        <a className="box "
                            style={{
                                backgroundImage: `url(${SocialT})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                              }}
                              href="/services"
                            >
                            <h1>{dictionary.SO3}</h1>
                           <p className="text">
                           {dictionary.SO3DA}
                           </p>
                        </a>
                    </div>
                </div>
        </React.Fragment>
    );
}