/* Get Profile API */

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

interface UseFetchProfileOutput {
  isLoading: boolean;
  fetchProfile: () => Promise<boolean>;
}

export type UseFetchProfile = () => UseFetchProfileOutput;
