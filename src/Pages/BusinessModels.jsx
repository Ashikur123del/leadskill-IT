import React from 'react'
import BusinessModel from '../Components/BusinessModelComponent/BusinessModel'
import HeroComn from '../Components/Sherd-compo/HeroComn'

const BusinessModels = () => {
  return (
    <div>
        <HeroComn imageSrc='/business mudule 01 .png'  height = "h-64 md:h-96 lg:h-[70%]"/>
        <BusinessModel/>
    </div>
  )
}

export default BusinessModels