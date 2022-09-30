import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )

const rootReducer = {
    count: counterReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;