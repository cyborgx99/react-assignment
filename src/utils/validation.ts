import * as yup from 'yup';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const stringRequiredMinMax = yup
  .string()
  .required('Field is required')
  .min(3, 'Must be longer than 2 characters')
  .max(64, 'Must be shorter than 64 characters');
