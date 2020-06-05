import React from 'react';

import './firstText.scss'
import housePic from '../../../utilities/assets/House-Picture.jpeg'

function FirstText(props) {


    return (
        <section>

            <div className='first-text-body'>
                <div className='house-pic-container'>
                    <img className='house-pic' src={housePic} />
                </div>

                <div className='first-text-container'>
                    <h1 className='first-text-header'>
                        Owners who manage through Arrived drive higher top lines.
                </h1>
                    <div className='ft-body-text-container'>
                        <p className='ft-text-one'>
                            Even in big cities, over 75% of our listings appear within the first two pages of Airbnb.
                    </p>
                        <p className='ft-text-two'>
                            We do this by using proprietary pricing and SEO score strategies to increase your property's visibility, which helps you beat the market, while maintaining dynamic pricing.
                    </p>

                        <p className='ft-text-3'>
                            Our partners report observing a 25-50% increase in booking volume within the first two weeks through our proprietary market-matching software.
                    </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FirstText;