import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Header from '../components/HeroSection/header/Header'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'
import FeelSpecial from '../common/feelSpecial/FeelSpecial'

const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductShowcase />
            <FeelSpecial />
        </>
    )
}

export default Homepage
