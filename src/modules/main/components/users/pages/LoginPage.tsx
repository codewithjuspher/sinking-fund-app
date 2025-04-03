import React from 'react';
import SSOProvider from '@/modules/main/components/users/components/SSOProvider';
import Card from '@/components/UI/Card';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card>
        <SSOProvider />
      </Card>
    </div>
  );
};

export default LoginPage;