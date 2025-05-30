import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the form schema using Zod
const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Handler for form submission
  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login form submitted:', values);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // In a real application, you would handle success/error (e.g., show a toast, redirect)
    alert(`Mock login successful for username: ${values.username}`); 
    form.reset(); // Reset form fields after submission
  };

  // Handler for the sign-up link click
  const handleSignUpClick = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    console.log('Sign up link clicked');
    // In a real application, this would navigate to a sign-up page or open a sign-up modal
    alert('Navigate to Sign Up page (mock).');
  }, []);

  return (
    <Card className={cn('w-[400px] shadow-lg', className)}>
      <CardHeader>
        {/* Card Title: Large and bold as per the image */}
        <CardTitle className="text-3xl font-bold">Log in</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Username" 
                      {...field} 
                      className="text-sm placeholder:text-muted-foreground"
                    />
                  </FormControl>
                  <FormMessage /> {/* Displays validation errors for this field */}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Password" 
                      {...field} 
                      className="text-sm placeholder:text-muted-foreground"
                    />
                  </FormControl>
                  <FormMessage /> {/* Displays validation errors for this field */}
                </FormItem>
              )}
            />
            {/* Submit Button: Full width, taller, and uses primary color by default */}
            <Button 
              type="submit" 
              className="w-full py-3 text-sm font-medium" 
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
        </Form>
        {/* Sign-up Link Section */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          or,{' '}
          <a
            href="#" // Placeholder href
            onClick={handleSignUpClick}
            className="font-medium text-primary hover:text-primary/90 underline"
          >
            sign up
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
