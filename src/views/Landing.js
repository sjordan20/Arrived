import React from 'react';
import ArrivedVideo from '../components/landing/arrivedVideo/ArrivedVideo';
import FirstText from '../components/landing/firstText/FirstText';
import SecondText from '../components/landing/secondText/SecondText';
import ThirdText from '../components/landing/thirdText/ThirdText';

function Landing(props) {
    return (
        <div>
            <ArrivedVideo />
            <FirstText />
            <SecondText />
            <ThirdText />
        </div>
    );
}

export default Landing;