import * as yup from 'yup';

export const RestoreAccessSchema = yup.object({
  email: yup
    .string()
    .trim()
    .lowercase()
    .email('Email must be a valid email.')
    .required('Email is required.')
    .matches(
      /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
      'Please enter a valid Gmail, Yahoo, or iCloud email address.',
    ),
});
