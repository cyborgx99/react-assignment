export interface FormInputComponentProps {
  label: string;
  name: string;
  type: 'date' | 'datetime-local' | 'email' | 'password' | 'text' | 'url';
  placeholder?: string;
}

export interface RegularInputComponentProps {
  value: string | number;
  title: string;
  type: 'date' | 'datetime-local' | 'email' | 'password' | 'text' | 'url';
  placeholder?: string;
  hasError?: boolean;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
