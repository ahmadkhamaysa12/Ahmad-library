import * as yup from 'yup';

export const RegisterSchema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(t('validation.email.required'))
      .email(t('validation.email.invalid'))
      .matches(
        /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
        t('validation.email.domain'),
      ),

    password: yup
      .string()
      .trim()
      .required(t('validation.password.required'))
      .min(6, t('validation.password.min'))
      .matches(/^[A-Z]/, t('validation.password.uppercase'))
      .matches(/[0-9]/, t('validation.password.number'))
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        t('validation.password.special'),
      ),

    userName: yup
      .string()
      .trim()
      .required(t('validation.username.required'))
      .matches(
        /^[A-Za-z][A-Za-z0-9_]{3,15}$/,
        t('validation.username.pattern'),
      ),

    fullName: yup
      .string()
      .trim()
      .required(t('validation.fullName.required'))
      .min(3, t('validation.fullName.min')),

    phoneNumber: yup
      .string()
      .trim()
      .required(t('validation.phone.required'))
      .matches(/^\+?[0-9]{10,15}$/, t('validation.phone.pattern')),
  });
