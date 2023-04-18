import React from 'react';
import images from './images/star-wars.PNG';

const Logo = (props) => {
    return(
        <div >
            <img className="applogo" src={images} alt="mylogo" ></img> 
        </div>
    )
}

export default Logo;