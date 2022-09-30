import { createAsyncThunk } from "@reduxjs/toolkit";




;


const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      //call api to register

      //save data to local storage

      return{};
    }
  )
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:{},
        settings:{},
    },
    reducers: { },
    extraReducers:{
        [register.fulfilled]: (state, action)=>{}
    }
});

const { reducer } = userSlice;
export default reducer ; // default export
