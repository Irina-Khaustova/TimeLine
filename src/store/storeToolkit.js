import { configureStore } from '@reduxjs/toolkit';
import timeLine from '../store/slices/sliceTimeLine'

export const store = configureStore({
    reducer: {
        timeLine: timeLine,
    },
  });

