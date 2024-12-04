import React from 'react';
import Card from '../../components/cards'; 

const AdminDashboard: React.FC = () => {
  const recommendations = [
    {
      title: 'Engineering and Development',
      description: 'Explore exciting career opportunities in engineering and development...',
      imageUrl: 'software-development.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 220,
      imageWidth: 260,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'Data and Analytics',
      description: 'Take your passion for data to the next level...',
      imageUrl: 'analysis.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 230,
      imageWidth: 270,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'Product and Design',
      description: 'Step into the world of product design...',
      imageUrl: 'prototype.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 220,
      imageWidth: 260,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'Leadership and Management',
      description: 'Are you a natural leader...',
      imageUrl: 'leadership.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 220,
      imageWidth: 260,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'Customer and Sales',
      description: 'If you enjoy building relationships...',
      imageUrl: 'direct-marketing.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 220,
      imageWidth: 270,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'Marketing and Communications',
      description: 'Join the dynamic world of marketing...',
      imageUrl: 'bullhorn.png',
      link: '/admin-dashboard/employee/EmployeeJohnDoe',
      imageHeight: 220,
      imageWidth: 260,
      cardHeight: 500,
      cardWidth: 560,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Career Opportunities</h2>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {recommendations.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link} 
              imageHeight={item.imageHeight}
              imageWidth={item.imageWidth}
              cardHeight={item.cardHeight}
              cardWidth={item.cardWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;