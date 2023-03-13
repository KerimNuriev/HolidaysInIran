import type Admin from './AdminType';

type AdminState = {
  authChecked: boolean;
  admin?: Admin;
  loginFormError?: string;
};

export default AdminState;
