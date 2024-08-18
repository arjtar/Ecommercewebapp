import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authSvc from "../pages/auth/auth.service";

export const getLoggedInUserFormReducer: any = createAsyncThunk (
    "user/getLoggedInUserFormReducer",
    async() => {
        try{
            const response: any = await authSvc.getRequest('auth/me', {auth:true});
            return response.result;

        }catch(exception) {
            throw exception;
        }
    }

)
const UserSlicer = createSlice ({
    name: "user",
    initialState : {
        loggedInUser: null
    },
    reducers :{
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        }

    },
    extraReducers: (builder) =>{
        builder.addCase(getLoggedInUserFormReducer.fulfilled, (state, action) =>{
            state.loggedInUser = action.payload
        })
        builder.addCase(getLoggedInUserFormReducer.rejected, (state)=>{
            state.loggedInUser = null
        })
    }
})

export const {setLoggedInUser} = UserSlicer.actions
export default UserSlicer.reducer;