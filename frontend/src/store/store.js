// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/Login/authSlice'
import { authApi } from '../features/auth/Login/authApi'
import { jobBoardApi } from '../features/coursemain/Jobboard/jobBoardApi';
import jobBoardReducer from '../features/coursemain/Jobboard/jobBoardSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    jobBoard: jobBoardReducer,
    [authApi.reducerPath]: authApi.reducer, 
    [jobBoardApi.reducerPath]: jobBoardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,jobBoardApi.middleware), 
});

export default store