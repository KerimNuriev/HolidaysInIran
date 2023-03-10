/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type DaysState from './types/DayState';
import * as apiDays  from './apiDay8Swiper';

const initialState: DaysState = {
  daysList: [],
};

// thunk - это экшен, который связан с асинхронной операцией (api)
// const loadNotes = createAsyncThunk('notes/loadNotes', () => api.loadNotes());
export const loadDays = createAsyncThunk(
  // название экшена (оно нужно для отладки)
  'daysSwiper/loadDays',
  async () => {
    const days = await apiDays.loadDays();
    // можем сделать что-то с результатом

    // результат этой функции попадёт в payload в extraReducer
    return days;
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

const daysSlice = createSlice({
  name: 'Day8Swiper',
  initialState,
  reducers: {},
  // здесь мы прописываем, что произойдёт со стэйтом после исполнения асинхронной операции (из thunk)
  extraReducers: (builder) => {
    // если loadNotes завершилось успешно (fulfilled)
    builder
      .addCase(loadDays.fulfilled, (state, action) => {
        // то мы делаем вот это со стэйтом
        state.daysList = action.payload;
      })
    //   .addCase(updateNote.fulfilled, (state, action) => {
    //     // ! - означает гарантию, что такой объект - есть, это - нерекомендуемая практика
    //     // так как снижает защиту типизации
    //     const note = state.notesList.find((n) => n.id === action.payload.id)!;
    //     note.text = action.payload.text;
    //   });
  },
});

export default daysSlice.reducer;