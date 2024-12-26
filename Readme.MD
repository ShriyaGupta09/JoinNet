# JoinNet Management System

This is a **React-based Role-Based Access Control (RBAC) project** designed to manage users, roles, and dashboards in an organized manner. The application is built using **Vite**, styled with **Tailwind CSS**, and leverages **shadcn/ui** for modern and responsive UI components.

## Features

1. **Admin Dashboard** for managing users and roles.
2. **Individual Employee Dashboards** for personalized access.
3. Dedicated pages for various job sectors:
   - Engineering & Development
   - Data & Analytics
   - Product & Design
   - Leadership & Management
   - Customers & Sales
   - Marketing & Communication
4. **Authentication System** for Login and Signup.
5. **Dynamic Form Fill-Up Page** for new users to enroll.
6. **Query Management** system for employees.

---

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16+)
- **npm** or **yarn**
- **Vite**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rbac-system.git
   cd rbac-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the app in your browser at `http://localhost:3000`.

---

## File Structure



Here’s an overview of the project structure based on the flowchart:

### 1. **EnterPage**
   - Acts as the **landing page** for the application.
   - Options to navigate to the **AdminLoginPage** or **MainPage**.
   - File: `src/pages/EnterPage.jsx`

### 2. **AdminLoginPage**
   - Provides admin access with login functionality.
   - Redirects to the **AdminDashboard** upon successful login.
   - File: `src/pages/AdminLoginPage.jsx`

### 3. **AdminDashboard**
   - Central hub for administrators.
   - Features:
     - Manage employees and their roles.
     - View and update employee details.
   - File: `src/pages/AdminDashboard.jsx`

### 4. **MainPage**
   - Home for users after authentication.
   - Links to various **Job Sector Pages**:
     - **Engineering & Development**
     - **Data & Analytics**
     - **Product & Design**
     - **Leadership & Management**
     - **Customers & Sales**
     - **Marketing & Communication**
   - File: `src/pages/MainPage.jsx`

### 5. **Job Sector Pages**
   - Each page corresponds to a specific job sector.
   - Displays available opportunities, roles, or resources for the selected sector.
   - Examples:
     - `src/pages/Sectors/EngineeringDevelopment.jsx`
     - `src/pages/Sectors/DataAnalytics.jsx`

### 6. **Form Fill-Up Page**
   - Accessible to new users wanting to enroll.
   - Includes:
     - Input fields for personal information, skills, and role preferences.
     - File upload for resumes.
   - File: `src/pages/FormFillPage.jsx`

### 7. **Query Page**
   - A page for employees to submit queries or concerns.
   - Features a dynamic form and query tracking system.
   - File: `src/pages/QueryPage.jsx`

### 8. **Individual Employee Dashboard**
   - Personalized dashboard for employees to view their roles, assignments, and updates.
   - File: `src/pages/EmployeeDashboard.jsx`

---

## Technology Stack

- **Frontend Framework**: React (via Vite for fast build and development)
- **UI Frameworks**:
  - **shadcn/ui** for modular and reusable UI components.
  - **Tailwind CSS** for styling.
- **State Management**: React Context API (or Redux, if applicable).
- **Routing**: React Router DOM.

---

## Scripts

- **Start development server**:
  ```bash
  npm run dev
  ```
- **Build for production**:
  ```bash
  npm run build
  ```
- **Preview production build**:
  ```bash
  npm run preview
  ```

---

## Customization

### Colors
- The app uses a palette of **blue, purple, and orange** for its theme. You can adjust these in the Tailwind configuration file (`tailwind.config.js`).

### Hover Effects
- Buttons and input fields have a **blue hover effect** for better interactivity. These can be adjusted in the global styles.

---

## Future Improvements

1. Implement **Role-Based Access Control Logic** for conditional rendering of pages based on user roles.
2. Add **API integration** for real-time data management.
3. Enhance **query tracking** with a notification system.

---

