import React from 'react'
import './Styles.css'

const Service = () => {
    return (
        <>
            <div className="service-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-title">
                                <h4>POPULAR SERVICES</h4>
                                <h3>Most Popular Services</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='42' width='52' src="./assets/twitter.png" alt="banner" />
                                </picture>
                                <h4>Twitter Verification</h4>
                                <p>Verify your Twitter account using our virtual phone numbers. Twitter sms verification starts from $0.05.</p>
                                <a href="##">Verify Twitter</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='42' width='52' src="./assets/discord.png" alt="banner" />
                                </picture>
                                <h4>Discord Verification</h4>
                                <p>Verify your Discord account using our virtual phone numbers. Discord sms verification starts from $0.05.</p>
                                <a href="##">Verify Discord</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='52' width='32' src="./assets/facebook.png" alt="banner" />
                                </picture>
                                <h4>Facebook Verification</h4>
                                <p>Verify your Facebook account using our virtual phone numbers. Facebook sms verification starts from $0.05.</p>
                                <a href="##">Verify Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='52' width='52' src="./assets/telegram.png" alt="banner" />
                                </picture>
                                <h4>Telegram Verification</h4>
                                <p>Verify your Telegram account using our virtual phone numbers. Telegram sms verification starts from $0.52.</p>
                                <a href="##">Verify Telegram</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='52' width='52' src="./assets/instagram.png" alt="banner" />
                                </picture>
                                <h4>Instagram Verification</h4>
                                <p>Verify your Instagram account using our virtual phone numbers. Instagram sms verification starts from $0.05.</p>
                                <a href="##">Verify Instagram</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-inner text-center">
                                <picture>
                                    <img height='52' width='52' src="./assets/whatsapp.png" alt="banner" />
                                </picture>
                                <h4>WhatsApp Verification</h4>
                                <p>Verify your Whatsapp account using our virtual phone numbers. Whatsapp sms verification starts from $0.43.</p>
                                <a href="##">Verify WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service