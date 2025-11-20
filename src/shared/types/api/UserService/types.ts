export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export type IUserDetails = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  lastLoginAt: string;
  lastLoginIP: string;
  createdAt: string;
  updatedAt: string;
};
