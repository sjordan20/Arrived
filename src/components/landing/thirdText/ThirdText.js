import React from 'react';

import './thirdText.scss'

import toastPic from '../../../utilities/assets/making-a-toast.jpg'

function ThirdText(props) {
    return (
        <section>

            <div className='third-text-body'>
                <div className='toast-pic-container'>
                    <img className='toast-pic' src={toastPic} />

                </div>
                <div className='third-text-container'>
                    <h1 className='third-text-header'>
                        We value every partnership like family.
                    </h1>
                    <div className='tt-body-text-container'>
                        <p className='tt-text-one'>
                            We go to every length to make each stay with us unforgettable. Here's what we do to make that happen.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ThirdText;