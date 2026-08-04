import * as yup from 'yup';

export const RestoreAccessSchema = (t) =>
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
  });
