import type { SliceCreator } from '@/types/store';

interface LoadingSlice {
  isLoading: boolean;
  setLoading: (payload: boolean) => void;
}

const initialState = {
  isLoading: true,
};

const createLoadingSlice: SliceCreator<LoadingSlice> = set => ({
  ...initialState,
  setLoading: payload => {
    set({ isLoading: payload }, false, 'loading/setLoading');
  },
});

export default createLoadingSlice;
