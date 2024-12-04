import React from 'react';

const EmployeeJohnDoe: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl font-bold mb-6">John Doe</h2>
      <div className="flex items-center gap-4">
        <div className="w-60 h-20 rounded-full bg-red-500 overflow-hidden">
          <img src="user.png" alt="John Doe" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-sm text-gray-600">
            John Doe is a highly skilled software engineer with experience in backend technologies such as Node.js, Python, and Go. He has worked on several large-scale projects, optimizing systems for efficiency and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeJohnDoe;
