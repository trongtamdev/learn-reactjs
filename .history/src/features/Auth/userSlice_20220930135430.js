import { createAsyncThunk } from '../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk';

;


const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:{},
        settings:{},
    },
    reducers: { },
});

const { reducer } = userSlice;
export default reducer ; // default export
