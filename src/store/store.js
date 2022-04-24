import { configureStore } from '@reduxjs/toolkit';
import stacklineSliceReducer from './stacklineSlice';

export const store = configureStore({
  reducer: {
    stacklineState: stacklineSliceReducer,
  },
});
