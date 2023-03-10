import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type CityState from './types/CityState';
import * as apiCity from './ApiCitySwiper'

const initialState: CityState = {
  citiesList: [],
};

// thunk - это экшен, который связан с асинхронной операцией (api)
// const loadNotes = createAsyncThunk('notes/loadNotes', () => api.loadNotes());
export const loadCities = createAsyncThunk(
  // название экшена (оно нужно для отладки)
  'citySwiper/loadCities',
  async () => {
    const cities = await apiCity.loadCities();
    // можем сделать что-то с результатом

    // результат этой функции попадёт в payload в extraReducer
    return cities;
  },
);

// export const updateNote = createAsyncThunk(
//   'notes/updateNote',
//   // параметры экшен-криэйтора (функции updateNote)
//   async ({ id, text }: { id: number; text: string }) => {
//     await api.updateNote(id, text);

//     // возвращаем те данные, которые необходимы, чтобы поменять стэйт (в action.payload)
//     return { id, text };
//   },
// );

const citiesSlice = createSlice({
  name: 'citySwiper',
  initialState,
  reducers: {},
  // здесь мы прописываем, что произойдёт со стэйтом после исполнения асинхронной операции (из thunk)
  extraReducers: (builder) => {
    // если loadNotes завершилось успешно (fulfilled)
    builder
      .addCase(loadCities.fulfilled, (state, action) => {
        // то мы делаем вот это со стэйтом
        state.citiesList = action.payload;
      })
    //   .addCase(updateNote.fulfilled, (state, action) => {
    //     // ! - означает гарантию, что такой объект - есть, это - нерекомендуемая практика
    //     // так как снижает защиту типизации
    //     const note = state.notesList.find((n) => n.id === action.payload.id)!;
    //     note.text = action.payload.text;
    //   });
  },
});

export default citiesSlice.reducer;