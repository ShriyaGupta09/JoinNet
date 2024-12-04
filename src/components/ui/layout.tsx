import type { PropsWithChildren } from 'react';
import Header from './header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout-container">
      <div className="bg-gradient-to-br from-sky-300 to-sky-400 sticky top-0 z-50">
        <Header />
      </div>

      <div className="bg-white min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>

      <footer className="bg-gradient-to-br from-sky-300 to-sky-400 border-t py-4">
        <div className="container mx-auto px-4 text-center text-gray-800 font-semibold">
          <p>Secure today, safe tomorrow 🛡️</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
