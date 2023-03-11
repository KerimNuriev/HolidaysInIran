import type Admin from './AdminType';

type AdminState = {
  authChecked: boolean;
  admin?: Admin;
};

export default AdminState;
