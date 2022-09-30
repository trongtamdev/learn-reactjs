import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      //call api to register

      //save data to local storage


      //return user data
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
        [register.fulfilled]: (state, action)=>{
            state.current=
        }
    }
});

const { reducer } = userSlice;
export default reducer ; // default export
