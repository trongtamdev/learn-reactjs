const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:{},
        settings:{},
    },
    reducers: { },
});

const { reducer } = userSlice;
export const {increase, decrease}=actions; //named export
export default reducer ; // default export
