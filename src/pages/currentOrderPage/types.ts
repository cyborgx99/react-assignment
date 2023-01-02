import { ErrorWithMessage } from 'utils/errorUtils';

export interface CurrentOrderFormInterface {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

export interface CurrentOrderFormPropsInterface {
  isLoading: boolean;
  onHandleOrder: (formData: CurrentOrderFormInterface) => void;
  error: ErrorWithMessage | null;
}
