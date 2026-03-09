import { z } from 'zod';

// Employee Form Schema
export const employeeSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters'),
  
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required'),
  
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .min(1, 'Phone number is required'),
  
  postalCode: z
    .string()
    .regex(/^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/i, 'Invalid Canadian postal code (e.g., T2P 1J9)')
    .min(1, 'Postal code is required'),
  
  department: z
    .string()
    .min(2, 'Department must be at least 2 characters')
    .max(50, 'Department must not exceed 50 characters'),
});

// Sign-In Form Schema
export const signInSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .min(1, 'Password is required'),
});

// Sign-Up Form Schema
export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Full name must be at least 2 characters')
      .max(100, 'Full name must not exceed 100 characters'),
    
    email: z
      .string()
      .email('Invalid email format')
      .min(1, 'Email is required'),
    
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    
    confirmPassword: z
      .string()
      .min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], 
  });

// TypeScript Types
export type EmployeeFormData = z.infer<typeof employeeSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;