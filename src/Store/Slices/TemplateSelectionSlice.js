import { createSlice } from "@reduxjs/toolkit";

const TemplateSlice=createSlice({
    name:'temp',
    initialState:'1',
    reducers:{
        TmpId(state,action){
            return state = action.payload
        }
    }
})

export default TemplateSlice.reducer;

export const {TmpId} = TemplateSlice.actions