import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type TourState from './types/TourState';
import * as apiTour from './apiTour'

const initialState: TourState = {
  toursList: [],
  toursListPlusMyTour: [],
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
        state.toursList.map(tour => tour.Days.sort((a,b) => a.number_day! - b.number_day!))
        
        state.toursListPlusMyTour.push(...state.toursList)
        state.toursListPlusMyTour.push({
          id: 'mytour',
          title: 'Индивидуальный тур',
          price_1: 2000,
          price_2: 2250,
          days: 8,
          image: '/image/tour3.jpeg',
          shortDescription:
            '1. 7 ночей проживания в гостинице типа «постель и завтрак» (сочетание традиционных, 3-х или 4-звездочных отелей). 2. Все трансферы в автомобилях с кондиционером (VIP BUS). 3. Официальный иранский, русскоязычный гид. 4. Письмо об одобрении визы (номер авторизации). 5. Все блюда, чай и минеральная вода. 6. Все входные билеты, за исключением дополнительных посещений или мероприятий. 7. Фотограф для приятные воспоминания о поездке!',
          description:
            'Этот тур планируется в соответствии со следующей таблицей; тем не менее, это может быть выполнено или повторено в программа с любого понедельника до следующей среды (исходя из того же расписания рейсов и времени). Стоимость тура действительна до 20 марта 2023 г., после чего она может быть увеличена в зависимости от уровня экономической инфляции в Иране. Цена тура действительна для группы от 15 до 20 (максимум) пассажиров. Исключения для тура: 1. Рейс Москва-Тегеран-Москва(согласно заявленному в маршруте расписанию). 2. Визовый сбор в посольстве или по прибытии. 3. Страховые взносы. 4. Любые блюда или напитки сверх того, что включено в программу тура. 5. Чаевые (водителю, гиду, носильщикам….) 6. Иранская сим-карта. 7. Личные расходы',
          Schedules: [],
          Days: [],
        })
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