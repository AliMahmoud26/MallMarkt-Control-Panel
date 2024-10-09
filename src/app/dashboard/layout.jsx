import Navbar from '@/app/ui/dashboard/navbar/navbar';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar';

export const metadata = {
  title: 'Dashboard',
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
