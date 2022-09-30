import { createAsyncThunk } from "../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk";
import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/createSlice";


;


const fetchUserById = createAsyncThunk(
    'users/register',
    async (pay) => {
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
