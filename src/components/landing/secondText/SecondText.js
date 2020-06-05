import React from 'react';
import './secondText.scss'

import livingRoomPic from '../../../utilities/assets/People-Gathered.jpg'
function SecondText(props) {
    return (
        <section>
            <div className='second-text-body'>
                <div className='second-text-container'>
                    <h1 className='second-text-header'>
                        We take care of you way before you arrive.
                    </h1>
                    <div className='st-body-text-container'>
                        <p className='st-text-one'>
                            From 24/7 messaging and call services to automated check-ins, we’re always close enough to serve at a moment’s notice, but far enough to ensure your comfort.
                        </p>
                        <p className='st-text-two'>
                            We communicate all check-in details and house rules to guests, and answer any questions posted within 3 minutes.
                        </p>
                    </div>
                </div>
                <div className='living-room-pic-container'>
                    <img className='living-room-pic' src={livingRoomPic} />
                </div>

            </div>
        </section>

    );
}

export default SecondText;