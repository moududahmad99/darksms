import React from 'react'
import './Styles.css'

const Banner = () => {
    return (
        <>
            <div className="banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-left">
                                <picture>
                                    <img width='1100px' height='1530px' src="./assets/homepage-3dcharacter_1.webp" alt="banner" />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-right">
                                <h3>Receive Online SMS with Virtual Number Service</h3>
                                <p>Use our disposable phone number service to verify your accounts. Cheap and reliable SMS verification service. Pay with credit/debit card or cryptocurrency.</p>
                                <div className="banner-right--inner">
                                    <a href="##" className='btn1'>Create an Account</a>
                                    <a href="##" className='btn2'>View Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;