import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type AuthState from './types/AdminState';
import type Credentials from './types/Credentials';
import * as api from './adminApi';
// import type RegisterData from './types/RegisterData';

const initialState: AuthState = {
  authChecked: false,
  admin: undefined,
};

export const getAdmin = createAsyncThunk('admin/auth', () => api.admin());

export const login = createAsyncThunk(
  'admin/login',
  async (credentials: Credentials) => {
    if (!credentials.userName.trim() || !credentials.password.trim()) {
      throw new Error('Не все поля заполнены');
    }

    return api.login(credentials);
  },
);

export const logout = createAsyncThunk('admin/logout', api.logout);

// export const register = createAsyncThunk(
//   'auth/register',
//   async (data: RegisterData) => {
//     if (data.password !== data.passwordRepeat) {
//       throw new Error('Пароли не совпадают');
//     }

//     if (!data.name.trim() || !data.password.trim()) {
//       throw new Error('Не все поля заполнены');
//     }

//     return api.register(data);
//   },
// );

// export const logout = createAsyncThunk('auth/logout', api.logout);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // // 332 редьюсер для очистки ошибки
    // resetLoginFormError: (state) => {
    //   state.loginFormError = undefined;
    // },
    // resetRegisterFormError: (state) => {
    //   state.registerFormError = undefined;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.authChecked = true;
        state.admin = action.payload.isLoggedIn
          ? action.payload.admin
          : undefined;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.admin = action.payload;
        // state.loginFormError = undefined;
      })

      .addCase(logout.fulfilled, (state) => {
        state.admin = undefined;
      });
    // 332 так изменяется стэйт если вернулась ошибка
    // .addCase(login.rejected, (state, action) => {
    //   state.loginFormError = action.error.message;
    // })

    // .addCase(logout.fulfilled, (state) => {
    //   state.user = undefined;
    // })

    // .addCase(register.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.registerFormError = undefined;
    // })
    // .addCase(register.rejecadminSliceted, (state, action) => {
    //   state.registerFormError = action.error.message;
    // });
  },
});

// export const { resetLoginFormError, resetRegisterFormError } =
//   authSlice.actions;

export default adminSlice.reducer;
