import * as yup from 'yup';

export const ResetPasswordSchema = (t) =>
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

    code: yup
      .string()
      .required(t('validation.code.required'))
      .matches(/^[0-9]{4}$/, t('validation.code.pattern')),

    newPassword: yup
      .string()
      .required(t('validation.password.required'))
      .min(6, t('validation.password.min'))
      .matches(/^[A-Z]/, t('validation.password.uppercase'))
      .matches(/[0-9]/, t('validation.password.number'))
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        t('validation.password.special'),
      ),
  });
