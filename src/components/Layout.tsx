import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ScrollIndicator } from './ScrollIndicator';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 pt-20 relative">
        {children}
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Layout;