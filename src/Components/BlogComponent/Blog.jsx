import React from 'react'
import BlogComn from '../Sherd-compo/BlogComn'

const Blog = () => {
  return (
    <div className='max-w-5xl mx-auto py-10'>
        <BlogComn 
        imageSrc="./bp1.webp" 
        title="A Unified Ecosystem of Social Impact Platforms" 
        description="To build a unified and system-driven ecosystem that transforms how people in Bangladesh learn to earn, stay secure and healthy, and invest safely- ensuring that innovation serves humanity with integrity."
        linkUrl="/your-link"
        />
        <BlogComn 
        imageSrc="./bp2.webp" 
        title="“Making Less to Achieve More”, How Eduman Is Redefining Schools" 
        description="In 2015, long before digital education became a national discussion, Mr. Raihan Nobel, Founder and Managing Director of Leadswin Limited (then Netizen), envisioned a future where schools could run smarter- not"
        linkUrl="/your-link"
        />
        <BlogComn 
        imageSrc="./bp3.webp" 
        title="Guiding Families, Empowering Futures, Protecting Dreams" 
        description="In a nation where education often ends at academics, EduCare, an initiative by Leadswin Limited, redefines what true learning means. Founded under the vision of Mr. Raihan Nobel"
        linkUrl="/your-link"
        />
        <BlogComn 
        imageSrc="./bp-4.webp" 
        title="HealthWin- Turning Patients into Victors, Not Victims" 
        description="In a healthcare system where too, many people suffer not from illness but from misguidance, mistrust, and mismanagement, HealthWin emerges as a new hope for families across Bangladesh."
        linkUrl="/your-link"
        />
        <BlogComn 
        imageSrc="./bp-5.webp" 
        title="Leadswin & Guardian Life Partner to Protect Families Through" 
        description="Dhaka, Bangladesh — In a landmark step toward building a secure and sustainable education–health ecosystem in Bangladesh, Leadswin Limited has entered into a strategic partnership with Guardian Life"
        linkUrl="/your-link"
        />
    </div>
  )
}

export default Blog