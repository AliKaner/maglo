import { API_ROUTES } from '@/shared/constants/api.routes';
import { protectedAPI, unprotectedAPI } from '@/shared/lib/api';
import { APIResponse } from '@/shared/types/api/response';
import { IAuthPayload, LoginResponse, ProfileResponse, RegisterResponse } from '@/shared/types/api/UserService';

interface IUserAPI {
  register(payload: IAuthPayload): Promise<APIResponse<RegisterResponse>>;
  login(payload: Partial<IAuthPayload>): Promise<APIResponse<LoginResponse>>;
  logout(): Promise<void>;
  getUserDetails(): Promise<ProfileResponse>;
}

class UserAPI implements IUserAPI {
  async register(payload: IAuthPayload): Promise<APIResponse<RegisterResponse>> {
    const { data } = await unprotectedAPI.post<APIResponse<RegisterResponse>>(API_ROUTES.USERS.REGISTER, payload);

    return data;
  }

  async login(payload: Partial<IAuthPayload>): Promise<APIResponse<LoginResponse>> {
    const { data } = await unprotectedAPI.post<APIResponse<LoginResponse>>(API_ROUTES.USERS.LOGIN, payload);

    return data;
  }

  async logout(): Promise<void> {
    await protectedAPI.post<void>(API_ROUTES.USERS.LOGOUT);
  }

  async getUserDetails(): Promise<ProfileResponse> {
    const { data } = await protectedAPI.get<ProfileResponse>(API_ROUTES.USERS.USER_PROFILE);

    return data;
  }
}

const userAPI = new UserAPI();
export default userAPI;
