export type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
  label?: String;
  tabIndex: number;
};

export type LoginRequest = {
  email: string;
  password: string;
};
