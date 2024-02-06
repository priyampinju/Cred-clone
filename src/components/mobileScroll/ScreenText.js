import React from 'react'

const ScreenText = ({ screen, setCurrentImg, i }) => {
    return (
        <div className='screen-text'>
            <div className="screen-text-heading">{screen.heading}</div>
            <div className="mobile-mockup-wrapper only-mobile">
                <div className="mobile-mockup">
                    <div className="mobile-mockup-screen flex absolute-center">
                        <img src={screen.mobile_img} className="mobile-screen-image" />
                    </div>
                </div>
            </div>

            <div className="screen-text-description">{screen.description}</div>
        </div>
    )
}

export default ScreenText
