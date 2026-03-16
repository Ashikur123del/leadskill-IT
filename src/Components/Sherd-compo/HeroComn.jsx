// src/components/HeroComn.jsx
import React from 'react';

const HeroComn = ({ 
  imageSrc = "/our-history.png",   
  altText = "Hero Image", 
  height = "h-64 md:h-96 lg:h-full",                          
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Image */}
      <img 
        src={imageSrc} 
        alt={altText}
        className={`w-full ${height} object-cover object-center`}
        loading="lazy"   
      />
    </div>
  );
};

export default HeroComn; 
        
  
