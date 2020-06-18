import React from 'react';
import ArrivedVideo from '../components/landing/arrivedVideo/ArrivedVideo';
import Form from '../components/landing/form/Form'
import FirstText from '../components/landing/firstText/FirstText';
import SecondText from '../components/landing/secondText/SecondText';
import ThirdText from '../components/landing/thirdText/ThirdText';
import BottomRocks from '../components/landing/bottomRocks/BottomRocks';

function Landing(props) {
    return (
        <div>
            <ArrivedVideo />
            <Form />
            <FirstText />
            <SecondText />
            <ThirdText />
            <BottomRocks />
        </div>
    );
}

export default Landing;