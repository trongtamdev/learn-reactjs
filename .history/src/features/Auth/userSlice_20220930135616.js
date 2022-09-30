import { createAsyncThunk } from "../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk";
import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/createSlice";


;


const fetchUserById = createAsyncThunk(
    'users/register',
    async (payload) => {
      //call api to register

      //save data to local storage

      
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
