import { configureStore } from '@reduxjs/toolkit';

import config from '@/config';
import reducers from '@/store/reducer';

const store = configureStore({
  reducer: reducers,
  devTools: config.NODE_ENV === 'development',
});

export default store;
