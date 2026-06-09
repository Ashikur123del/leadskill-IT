import React from 'react'
import InvestorsQuery from '../Components/InvestorsQueryComponent/InvestorsQuery'
import HeroComn from '../Components/Sherd-compo/HeroComn'
import Logo from '../assets/mentorerp 2022 .png'

const InvestorsQuerys = () => {
  return (
    <div>
        <HeroComn imageSrc={Logo}/>  
        {/*  */}
        <InvestorsQuery />
    </div>
  )
}

export default InvestorsQuerys