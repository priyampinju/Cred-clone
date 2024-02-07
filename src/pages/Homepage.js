import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Header from '../components/HeroSection/header/Header'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'
import FeelSpecial from '../components/feelSpecial/FeelSpecial'
import CredExperience from '../components/credExperience/CredExperience'
import CredSecurity from '../components/CredSecurity/CredSecurity'
import BrandsLove from '../components/BrandsLove/BrandsLove'
import WindowPeak from '../components/windowPeak/WindowPeak'
import MobileScroll from '../components/mobileScroll/MobileScroll'
import CredStory from '../components/CredStory/CredStory'
import AppRating from '../components/AppRating/AppRating'

const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShowcase />
            <FeelSpecial />
            <BrandsLove />
            <CredExperience />
            <MobileScroll />
            <div className='non-mobile'>
                <WindowPeak />
            </div>
            <CredSecurity />
            <CredStory />
            <AppRating />
        </>
    )
}

export default Homepage
