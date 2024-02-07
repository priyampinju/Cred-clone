import React from 'react'
import './AppRating.css'
import Button from '../../common/button/Button'

const getIosPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="apple" />
}

const AppRating = () => {
    return (
        <div className='max-width flex app-rating'>
            <div className="app-rating-block flex flex-col">
                <div className="flex">
                    <div className="app-rating-value">4.8
                        <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" alt="star" className="app-rating-star" />
                    </div>
                    <div className="app-rating-plateform">app-store</div>
                </div>
            </div>
            <div className="non-mobile">
                <Button buttonText='Download the app' customClass='app-rating-button' prefix={getIosPrefix()} />
            </div>

            <div className="app-rating-block flex flex-col">
                <div className="flex">
                    <div className="app-rating-value">4.8
                        <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" alt="star" className="app-rating-star" />
                    </div>
                    <div className="app-rating-plateform">app-store</div>
                </div>
                <div className="non-mobile">
                    <Button buttonText='Download the app' customClass='app-rating-button' prefix={getIosPrefix()} />
                </div>
            </div>
        </div>
    )
}

export default AppRating
