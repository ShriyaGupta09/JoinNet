import React from 'react';
import { Link } from 'react-router-dom'; 

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string; 
  imageHeight?: number; 
  imageWidth?: number; 
  cardHeight?: number;  
  cardWidth?: number;   
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  link, 
  imageHeight = 380,  
  imageWidth = 260,   
  cardHeight = 500,  
  cardWidth = 560     
}) => {
  return (
    <div 
      className="border-2 border-blue-100 rounded-lg overflow-hidden shadow-lg flex flex-col items-center"  
      style={{ height: cardHeight, width: cardWidth }}
    >
    
      <Link to={link}>
      
        <div 
          className="flex justify-center items-center mb-6 pt-4" 
          style={{ height: imageHeight, width: imageWidth }}
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover" 
            style={{ height: '100%', width: '80%' }} 
          />
        </div>
      </Link>

      <div className="px-1 pb-4 text-left flex-grow">
  <h3 className="text-3xl text-left font-semibold mb-2 ">{title}</h3> 
  <p className="text-sm text-gray-700">{description}</p>
  <div className="mt-16 text-left"> 
    <Link to={link} className="text-black font-medium">
      Discover More...
    </Link>
  </div>
</div>

    </div>
  );
};

export default Card;

