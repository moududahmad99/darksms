import React from 'react'
import './Styles.css'

const Banner = () => {
    return (
        <>
            <div className="banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-left">
                                <picture>
                                    <img src="./assets/homepage-3dcharacter_1.webp" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-right">
                                <h3>Receive Online SMS with Virtual Number Service</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;