import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type CityState from './types/CityState';
import * as apiCity from './apiCity';
import type CityType from './types/CityType';
import type { CityId } from './types/CityType';

const initialState: CityState = {
  citiesList: [],
};

// thunk - это экшен, который связан с асинхронной операцией (api)
// const loadNotes = createAsyncThunk('notes/loadNotes', () => api.loadNotes());
export const loadCities = createAsyncThunk(
  // название экшена (оно нужно для отладки)
  'cities/loadCities',
  async () => {
    const cities = await apiCity.loadCities();
    // можем сделать что-то с результатом

    // результат этой функции попадёт в payload в extraReducer
    return cities;
  },
);

export const addCities = createAsyncThunk(
  'cities/addCities',
  async (city: CityType) => {
    const cities = await apiCity.addCities(city);
    return cities;
  },
);

export const deleteCity = createAsyncThunk(
  'tasks/deleteCity',
  async (id: CityId) => {
    await apiCity.deleteCity(id);
    return id;
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
  name: 'cities',
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
      .addCase(addCities.fulfilled, (state, action) => {
        state.citiesList = [action.payload, ...state.citiesList];
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        state.citiesList = state.citiesList.filter(
          (city) => city.id !== action.payload,
        );
      });
    //   .addCase(updateNote.fulfilled, (state, action) => {
    //     // ! - означает гарантию, что такой объект - есть, это - нерекомендуемая практика
    //     // так как снижает защиту типизации
    //     const note = state.notesList.find((n) => n.id === action.payload.id)!;
    //     note.text = action.payload.text;
    //   });
  },
});

export default citiesSlice.reducer;
