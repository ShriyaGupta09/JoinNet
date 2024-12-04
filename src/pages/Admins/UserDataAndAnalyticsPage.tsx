import React from 'react';
import { Link } from 'react-router-dom';

const UserDataAndAnalytics: React.FC = () => {
  const dataAndAnalyticsTeam = [
    {
      name: 'Alice Johnson',
      description: 'Data scientist specializing in predictive analytics and machine learning...',
      photoUrl: 'alice-johnson.jpg',
      link: '/EmployeeJohnDoe',
    },
    {
      name: 'Robert Martinez',
      description: 'Business analyst with a focus on data-driven decision making...',
      photoUrl: 'robert-martinez.jpg',
      link: '/EmployeeJohnDoe',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl font-bold text-center mb-6">Data and Analytics Team</h2>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {dataAndAnalyticsTeam.map((member, index) => (
          <div key={index} className="border rounded-md p-4 w-72">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500 overflow-hidden">
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

export default UserDataAndAnalytics;
