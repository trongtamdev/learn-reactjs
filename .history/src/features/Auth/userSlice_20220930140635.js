import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { date } from 'yup';

const register = createAsyncThunk('users/register', async (payload) => {
  //call api to register
  const user = await userApi.register(payload);

  //save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  //return user data
  return date.user;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer; // default export
