import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  tourApplication  from './apiTourForm'
import type FormApplicationType from './types/FormApplicationType';

const initialState: FormApplicationType = {
    loading: false,
    name: '', 
    email: '',
    phone: '',
    tour: '',
    date: '',
    connection: '',
}

export const loadApplication = createAsyncThunk(
    'toursForm/loadApplication',
    async ({application}: {application: FormApplicationType}) => {
    await tourApplication({application})
    return application;
});

const tourFormSlice = createSlice({
    name: 'toursForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadApplication.fulfilled, (state, action) => {
         state.loading = false;
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.phone = action.payload.phone;
         state.date = action.payload.date;
         state.tour = action.payload.tour;
         state.connection = action.payload.connection;
        })
        .addCase(loadApplication.rejected, (state, action) => {
           state.loadError = action.error.message;
        })
    },
});

export default tourFormSlice.reducer;