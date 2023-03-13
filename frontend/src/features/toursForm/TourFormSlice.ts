import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  tourApplication  from './apiTourForm'
import type FormApplicationType from './types/FormApplicationType';

const initialState: FormApplicationType = {
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
    if (!application.name.trim() || !application.tour.trim() || !application.email.trim() || !application.phone.trim() || !application.connection.trim() || !application.date.trim()) {
        throw new Error('Не все поля заполнены');
      }

    return application;
});


const tourFormSlice = createSlice({
    name: 'toursForm',
    initialState,
    reducers: {
        resetLoadError: (state) => {
            state.loadError = undefined;
    }},
    extraReducers: (builder) => {
        builder
        .addCase(loadApplication.fulfilled, (state, action) => {
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.phone = action.payload.phone;
         state.date = action.payload.date;
         state.tour = action.payload.tour;
         state.connection = action.payload.connection;
         state.loadError = undefined;
        })
        .addCase(loadApplication.rejected, (state, action) => {
           state.loadError = action.error.message;
        })
    },
});
export const { resetLoadError } = tourFormSlice.actions;

export default tourFormSlice.reducer;