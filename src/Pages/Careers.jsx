import React from 'react'
import Career from '../Components/CareerComponent/Career'
import HeroComn from '../Components/Sherd-compo/HeroComn'
import HiringProcess from '../Components/HiringProcessComponent/HiringProcess'

const Careers = () => {
  return (
    <div>
        <HeroComn imageSrc='./career.webp'/>
        <Career />
        <HiringProcess />
    </div>
  )
}

export default Careers