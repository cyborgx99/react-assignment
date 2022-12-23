import { phoneRegExp, stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';
import { CurrentOrderFormInterface } from './types';

export const currentOrderFormInitialValues: CurrentOrderFormInterface = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
};

export const currentOrderFormValidationSchema = yup.object({
  name: stringRequiredMinMax,
  lastName: stringRequiredMinMax,
  email: stringRequiredMinMax.email('Should be a valid email'),
  phone: stringRequiredMinMax.matches(phoneRegExp, 'Phone is not valid'),
  address: stringRequiredMinMax,
  city: stringRequiredMinMax,
});
