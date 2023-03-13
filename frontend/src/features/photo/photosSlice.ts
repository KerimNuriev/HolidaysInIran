/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type PhotoState from './types/PhotoState';
import * as apiPhoto from './apiPhoto';

const initialState: PhotoState = {
  photoList: [],
  // photo: {},
};

export const loadPhotos = createAsyncThunk(
  // название экшена (оно нужно для отладки)
  'photo/loadPhoto',
  async () => {
    const photos = await apiPhoto.loadPhoto();

    return photos;
  },
);

const photosSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loadPhotos.fulfilled, (state, action) => {
      // то мы делаем вот это со стэйтом
      state.photoList = action.payload;
    });
  },
});

export default photosSlice.reducer;
