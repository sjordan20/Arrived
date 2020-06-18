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
                    <form>

                        <div className='top-inputs'>
                            <p className='input-header'>
                                Find out how much you could earn
                    </p>
                            <div className='name-phone-number'>

                                <input placeholder='Name'
                                    className='name-phone-number-input'

                                />
                                <input
                                    placeholder='Phone Number'
                                    type='tel'
                                    className='name-phone-number-input'
                                />
                            </div>

                            <input
                                placeholder='Enter Your Email'
                                type='email'
                                className='email-input'
                            />

                        </div>

                        <div className='bottom-inputs'>
                            <input
                                placeholder='Your Arbnb/VRBO URL'
                                className='arbnb-url'
                            />

                            <p>
                                Or
                        </p>
                            <div className='home-details-inputs'>
                                <div className='left-inputs'>
                                    <input placeholder='Bedroom #' />
                                    <input placeholder='Bathroom #' />
                                    <input placeholder='Sq Ft' />

                                </div>
                                <div className='right-inputs'>
                                    <input placeholder='Year Built' />
                                    <input placeholder='City' />
                                    <input placeholder='Zip Code' />

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
