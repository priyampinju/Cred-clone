import React from 'react'
import './AppRating.css'
import Button from '../../common/button/Button'

const getIosPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="apple" className='app-rating-icon' />
}
const getAndPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" alt="android" className='app-rating-icon' />
}

const AppRating = () => {
    return (
      <div className="max-width app-rating flex">
        <div className="flex app-rating-block flex-col">
          <div className="flex">
            <div className="app-rating-value flex flex-col">
              4.8
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                className="app-rating-stars"
              />
            </div>
            <div className="app-rating-platform">
              app <br /> store
            </div>
          </div>
          <div className="non-mobile">
            <Button
              prefix={getIosPrefix()}
              buttonText="Download the app"
              customClass="app-rating-button"
            />
          </div>
        </div>
        <div className="flex app-rating-block flex-col">
          <div className="flex">
            <div className="app-rating-value flex flex-col">
              4.7
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
                className="app-rating-stars"
              />
            </div>
            <div className="app-rating-platform">
              play <br /> store
            </div>
          </div>
          <div className="non-mobile">
            <Button
              prefix={getAndPrefix()}
              buttonText="Download the app"
              customClass="app-rating-button"
            />
          </div>
        </div>
        <div className="only-mobile">
          <Button buttonText="Download the app" />
        </div>
      </div>
    );
  };

export default AppRating
