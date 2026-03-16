
import { FaBriefcase, FaChartLine, FaUsers, FaBook } from 'react-icons/fa';
import FeatureCard from '../Sherd-compo/FeatureCard';

const Career = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={FaBriefcase}
          title="Great Working Environment"
          description="We maintain a professional, inclusive, and collaborative working environment founded on mutual respect and open communication. Our culture encourages strong interdepartmental relationships, teamwork, and innovation- driving collective growth and shared success across the organization."
        />
        
        <FeatureCard 
          icon={FaChartLine}
          title="Career Growth"
          description="We are committed to fostering the professional growth of our team members in alignment with the company’s vision. Through continuous skill development, structured mentorship, and performance-based advancement, we enable individuals to realize their full potential and build rewarding, long-term careers."
        />

        <FeatureCard 
          icon={FaUsers}
          title="Team Work Culture"
          description="At Leadswin, we value collaboration and mutual respect. Our team works as one- sharing ideas, supporting each other, and combining strengths to achieve common goals. Together, we work not just as colleagues, but as one unified team committed to achieving common goals and delivering lasting impact."
        />

        <FeatureCard 
          icon={FaBook}
          title="New Learning Opportunity"
          description="Continuous learning is an integral part of our organizational culture. We provide structured training programs, cross-functional learning opportunities, and leadership development initiatives that enable employees to enhance their skills and remain competitive in an ever-evolving professional landscape."
        />

      </div>
    </div>
    </div>
  )
}

export default Career