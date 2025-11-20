import { IUserDetails } from './types';

export type IAuthPayload = {
  fullName?: string;
  email: string;
  password: string;
};

export type RegisterResponse = Partial<IUserDetails>;

export type LoginResponse = {
  user: IUserDetails;
  accessToken: string;
  refreshToken?: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
};

export type ProfileResponse = IUserDetails;
