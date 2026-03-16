import React from 'react'
import Hero from '../Components/HomeComponent/Hero'
import EmpoweringFuture from '../Components/HomeComponent/EmpoweringFuture'
import Platform from '../Components/HomeComponent/Platform'
import SkillsSection from '../Components/HomeComponent/SkillsSection'
import OurTeamMember from '../Components/HomeComponent/OurTeamMember'
import ClientRating from '../Components/HomeComponent/ClicentRatting'



const Home = () => {
  return (
    <div>
        <Hero />
        <EmpoweringFuture />
        <Platform/>
        <SkillsSection />
        <OurTeamMember />
        <ClientRating />
    </div>
  )
}

export default Home