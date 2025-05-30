import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode; // Content to be rendered within the layout
  className?: string; // Optional additional class names for the main container
}

/**
 * MainAppLayout provides a centered layout structure for the application.
 * It centers its children both vertically and horizontally within the viewport.
 * The background color is set according to the theme's 'background' variable.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex justify-center items-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
