import { LOCAL_STORAGE_KEYS } from '@/shared/constants';
import { IUserDetails } from '@/shared/types/api/UserService';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserStore {
  user: IUserDetails | null;
  setUser: (user: IUserDetails | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.USER,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
