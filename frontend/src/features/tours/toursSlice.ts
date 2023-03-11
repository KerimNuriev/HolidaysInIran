import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type TourState from './types/TourState';
import * as apiTour from './ApiTour'

const initialState: TourState = {
  toursList: [],
};

// thunk - это экшен, который связан с асинхронной операцией (api)
// const loadNotes = createAsyncThunk('notes/loadNotes', () => api.loadNotes());
export const loadTours = createAsyncThunk(
  // название экшена (оно нужно для отладки)
  'tours/loadTours',
  async () => {
    const tours = await apiTour.loadTours();
    // можем сделать что-то с результатом

    // результат этой функции попадёт в payload в extraReducer
    return tours;
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

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  // здесь мы прописываем, что произойдёт со стэйтом после исполнения асинхронной операции (из thunk)
  extraReducers: (builder) => {
    // если loadNotes завершилось успешно (fulfilled)
    builder
      .addCase(loadTours.fulfilled, (state, action) => {
        // то мы делаем вот это со стэйтом
        state.toursList = action.payload;
      })
    //   .addCase(updateNote.fulfilled, (state, action) => {
    //     // ! - означает гарантию, что такой объект - есть, это - нерекомендуемая практика
    //     // так как снижает защиту типизации
    //     const note = state.notesList.find((n) => n.id === action.payload.id)!;
    //     note.text = action.payload.text;
    //   });
  },
});

export default toursSlice.reducer;