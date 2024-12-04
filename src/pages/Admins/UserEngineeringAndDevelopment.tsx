import React from 'react';
import { Link } from 'react-router-dom';

const UserEngineeringAndDevelopment: React.FC = () => {
  const employees = [
    {
      name: 'John Doe',
      description: 'Software Engineer with expertise in backend technologies...',
      photoUrl: 'john-doe.jpg',
      link: '/EmployeeJohnDoe',
    },
    {
      name: 'Jane Smith',
      description: 'Full-stack developer with a passion for building scalable systems...',
      photoUrl: 'jane-smith.jpg',
      link: '/EmployeeJohnDoe',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl font-bold text-center mb-6">Engineering and Development Team</h2>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {employees.map((employee, index) => (
          <div key={index} className="border rounded-md p-4 w-72">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500 overflow-hidden">
                <img src={employee.photoUrl} alt={employee.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.description}</p>
              </div>
            </div>
            <Link to={employee.link} className="text-blue-500 mt-4 block text-center">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEngineeringAndDevelopment;
