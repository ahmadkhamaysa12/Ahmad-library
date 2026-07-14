import * as yup from 'yup';

export const ResetPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email.')
    .required('Email is required.')
    .matches(
      /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
      'Please enter a valid Gmail, Yahoo, or iCloud email address.',
    ),

  code: yup
    .string()
    .required('Code is required.')
    .matches(/^[0-9]{4}$/, 'Code must be 4 digits.'),

  newPassword: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.')
    .matches(
      /^[A-Z][A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      'Password must begin with a capital letter and may include letters, numbers, and special characters.',
    ),
});