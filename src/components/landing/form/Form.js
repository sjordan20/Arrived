import React from "react";

import './form.scss'

const nodemailer = require('nodemailer')

const { EMAIL, PASSWORD } = process.env

const sendEmail = (data) => {
    const { email, firstName, lastName } = data

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    })

    let emailText = `Here is a form entry ${firstName} ${lastName}`
    // Step 2
    let mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: 'New Form',
        text: emailText,
        html: "<div>Hello :)</div>"
    }

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Email Success")
        }

    })
}



function Form(props) {



    return (
        <section>
            <div className="form-body">
                <div className="form-header-container">
                    <p className='line-one'>Arrived manages top tier properties in select vacation markets.
                        </p>
                    <p className='line-two'>
                        Through proprietary pricing algorithms, search engine and channel
                        optimization strategies,
                        </p>
                    <p className='line-three'>

                        we drive up to <span className='three-five'>35%</span> higher occupancy
						and booking rates
                        </p>
                </div>
                <div className='input-container'>
                    <form className='form'>

                        <div className='top-inputs'>
                            <p className='input-header'>
                                Find out how much you could earn
                    </p>
                            <div className='name-phone-number-container'>
                                <div className='name-input-container'>
                                    <input placeholder='Name'
                                        className='name-phone-number-input'
                                    />

                                </div>
                                <div>
                                    <input
                                        placeholder='Phone Number'
                                        type='tel'
                                        className='name-phone-number-input'
                                    />

                                </div>

                            </div>

                            <input
                                placeholder='Enter Your Email'
                                type='email'
                                className='email-input'
                            />

                        </div>

                        <div className='bottom-inputs'>
                            <div className='arbnb-input'>

                                <input
                                    placeholder='Your Arbnb/VRBO URL'
                                    className='arbnb-url'
                                />
                            </div>

                            <p className='or'>
                                Or
                        </p>
                            <div className='home-details-inputs'>
                                <div className='left-inputs'>
                                    <input className='details-inputs' placeholder='Bedroom #' />
                                    <input className='details-inputs' placeholder='Bathroom #' />
                                    <input className='details-inputs' placeholder='Sq Ft' />

                                </div>
                                <div className='right-inputs'>
                                    <input className='details-inputs' placeholder='Year Built' />
                                    <input className='details-inputs' placeholder='City' />
                                    <input className='details-inputs' placeholder='Zip Code' />

                                </div>

                            </div>

                        </div>
                    </form>


                </div>
            </div>
        </section>
    );
}

export default Form;
