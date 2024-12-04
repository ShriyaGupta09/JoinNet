import React from 'react';
import { Link } from 'react-router-dom';

const UserLeadershipAndManagement: React.FC = () => {
  const leaders = [
    {
      name: 'Michael Johnson',
      description: 'Experienced team leader with a proven track record in project management...',
      photoUrl: 'michael-johnson.jpg',
      link: '/EmployeeJohnDoe',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl font-bold text-center mb-6">Leadership and Management Team</h2>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="border rounded-md p-4 w-72">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 overflow-hidden">
                <img src={leader.photoUrl} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.description}</p>
              </div>
            </div>
            <Link to={leader.link} className="text-blue-500 mt-4 block text-center">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLeadershipAndManagement;
