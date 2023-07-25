export type User = {
  id?: string | number;
  name: string;
  email: string;
  password: string;
  permission: boolean;
  active: boolean;
  image?: string | undefined;
  date_created?: Date | undefined;
  date_updated?: Date | undefined;
};
