import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store';

interface LoadingSlice {
  isLoading: boolean;
  setLoading: (payload: boolean) => void;
}

type LoadingSliceProperties = RemoveFnType<LoadingSlice>;

const initialState: LoadingSliceProperties = {
  isLoading: true,
};

const createLoadingSlice: SliceCreator<LoadingSlice> = set => ({
  ...initialState,
  setLoading: payload => {
    set({ isLoading: payload }, false, 'loading/setLoading');
  },
});

export default createLoadingSlice;
