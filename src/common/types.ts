export enum USER_STATUS {
  ENABLE = 'ENABLE',
  DISABLE = 'DISABLE',
}

export enum USER_ROLE {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  GUEST = 'GUEST',
}

export interface User {
  id: string | undefined;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  contact: string | undefined;
  email: string | undefined;
  status: USER_STATUS;
  role: USER_ROLE;
}

export interface LoginInput {
  userName: string;
  password: string;
}

export interface LoginRes {
  user: User;
}

export type RegisterInput = User;
