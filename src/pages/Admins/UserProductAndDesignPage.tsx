import React from 'react';
import { Link } from 'react-router-dom';

const UserProductAndDesign: React.FC = () => {
  const productAndDesignTeam = [
    {
      name: 'Emily Davis',
      description: 'Product designer creating intuitive user experiences and interfaces...',
      photoUrl: 'emily-davis.jpg',
      link: '/EmployeeJohnDoe',
    },
    {
      name: 'Michael Brown',
      description: 'Product manager with a focus on agile development and customer-centric solutions...',
      photoUrl: 'michael-brown.jpg',
      link: '/EmployeeJohnDoe',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl font-bold text-center mb-6">Product and Design Team</h2>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {productAndDesignTeam.map((member, index) => (
          <div key={index} className="border rounded-md p-4 w-72">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500 overflow-hidden">
                <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </div>
            <Link to={member.link} className="text-blue-500 mt-4 block text-center">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProductAndDesign;
