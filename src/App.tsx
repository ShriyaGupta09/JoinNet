import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/ui/layout';
import MainPagePage from './pages/Users/main-page';
import LoginSignupPage from './pages/Users/LoginSignupPage';
import EngineeringAndDevelopmentPage from './pages/Users/EngineeringAndDevelopmentPage';
import CustomerAndSalesPage from './pages/Users/CustomerAndSalesPage';
import DataAndAnalyticsPage from './pages/Users/DataAndAnalyticsPage';
import LeadershipAndManagementPage from './pages/Users/LeadershipAndManagementPage';
import MarketingAndCommunicationsPage from './pages/Users/MarketingAndCommunicationsPage';
import ProductAndDesignPage from './pages/Users/ProductAndDesignPage';
import AdminDashboard from './pages/Admins/AdminDashboard';
import AdminLoginPage from './pages/Admins/AdminLoginPage';
import EnterPage from './pages/EnterPage';
import EmployeeJohnDoe from './pages/Admins/EmployeeJohnDoe';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/employee/:employeeId" element={<EmployeeJohnDoe />} />
          <Route path="/MainPage" element={<MainPagePage />} />
          <Route path="/MainPage/engineering-and-development" element={<EngineeringAndDevelopmentPage />} />
          <Route path="/MainPage/data-and-analytics" element={<DataAndAnalyticsPage />} />
          <Route path="/MainPage/product-and-design" element={<ProductAndDesignPage />} />
          <Route path="/MainPage/leadership-and-management" element={<LeadershipAndManagementPage />} />
          <Route path="/MainPage/customer-and-sales" element={<CustomerAndSalesPage />} />
          <Route path="/MainPage/marketing-and-communications" element={<MarketingAndCommunicationsPage />} />
          <Route path="/login-signup/:category" element={<LoginSignupPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

