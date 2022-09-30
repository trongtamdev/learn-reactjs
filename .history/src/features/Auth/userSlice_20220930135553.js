import { createAsyncThunk } from "../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk";
import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/createSlice";


;


const fetchUserById = createAsyncThunk(
    'users/register',
    async (payload) => {
      //call 
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
