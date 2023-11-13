import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weather from './slices/weatherSlice';
import location from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    weather,
    location
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
