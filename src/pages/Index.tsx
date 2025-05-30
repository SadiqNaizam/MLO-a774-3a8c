import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * LoginPage serves as the main view for user authentication.
 * It utilizes a CenteredLayout (implemented by MainAppLayout) to display
 * the LoginCard component in the center of the screen.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
