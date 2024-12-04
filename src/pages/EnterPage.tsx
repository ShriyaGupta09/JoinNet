import Card from "@/components/cards";
import { Link } from "react-router-dom";

const EnterPage: React.FC = () => {
  const recommendations = [
    {
      title: 'For Admins and Managers',
      description: 'Manage role-based access and explore career opportunities in leadership, management, and administrative roles...',
      imageUrl: 'software-development.png',
      link: '/AdminLoginPage',
      imageHeight: 220,
      imageWidth: 260,
      cardHeight: 500,
      cardWidth: 560,
    },
    {
      title: 'For Employees and Job Seekers',
      description: 'Advance your career in data analytics, product management, and design through exciting opportunities...',
      imageUrl: 'analysis.png',
      link: '/MainPage',
      imageHeight: 230,
      imageWidth: 270,
      cardHeight: 500,
      cardWidth: 560,
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Who are you ???</h2>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {recommendations.map((item, index) => (
            <div key={index} style={{ width: item.cardWidth, height: item.cardHeight }}>
              <Link to={item.link}>
                <Card
                          title={item.title}
                          description={item.description}
                          imageUrl={item.imageUrl}
                          imageHeight={item.imageHeight}
                          imageWidth={item.imageWidth} link={""}                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterPage;

