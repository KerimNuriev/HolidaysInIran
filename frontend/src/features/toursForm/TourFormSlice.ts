import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tourApplication from './apiTourForm';
import type FormApplicationType from './types/FormApplicationType';

const initialState: FormApplicationType = {
    name: '', 
    email: '',
    phone: '',
    tour: '',
    date: '',
    connection: '',
}

export const applic = createAsyncThunk(
    'toursForm/addApplication',
    async (application: FormApplicationType) => tourApplication({application})
    );

const tourFormSlice = createSlice({
    name: 'toursForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(applic.fulfilled, (state, action) => {
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.phone = action.payload.phone;
         state.date = action.payload.date;
         state.tour = action.payload.tour;
         state.connection = action.payload.connection;
        })
    },
});

export default tourFormSlice.reducer;