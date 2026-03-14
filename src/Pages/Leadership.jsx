import React from 'react'
import LeaderShip from '../Components/LeadershipComponent/LeaderShip'
import HeroComn from '../Components/Sherd-compo/HeroComn'

const Leadership = () => {
  return (
    <div>
        <HeroComn  imageSrc = "/leadership .png"  height = "h-64 md:h-96 lg:h-[70%]" />
        <LeaderShip/>
    </div>
  )
}

export default Leadership