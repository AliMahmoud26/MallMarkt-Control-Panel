'use client';
import withAuth from '@/app/utils/withAuth';

const Dashboard = () => {
  return <div>Welcome to the Dashboard!</div>;
};

export default withAuth(Dashboard);
