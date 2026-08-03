import * as yup from 'yup';

export const LoginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .lowercase()
    .required('Email is required.')
    .email('Email must be a valid email.')
    .matches(
      /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
      'Please enter a valid Gmail, Yahoo, or iCloud email address.',
    ),

  password: yup
    .string()
    .trim()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.')
    .matches(/^[A-Z]/, 'Password must start with a capital letter.')
    .matches(/[0-9]/, 'Password must contain at least one number.')
    .matches(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      'Password must contain at least one special character.',
    ),
});
