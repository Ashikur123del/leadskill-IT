import React from 'react'
import DailyLedger from '../Components/DailyLedgerComponent/DailyLedger'
import HeroComn from '../Components/Sherd-compo/HeroComn'

const DailyLedgers = () => {
  return (
    <div>
        <HeroComn imageSrc = "/eduman-3.webp"  height = "h-64 md:h-96 lg:h-[70%]"/>
        <DailyLedger />
    </div>
  )
}

export default DailyLedgers