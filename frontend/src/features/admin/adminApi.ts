import type Admin from './types/AdminType';
import type Credentials from './types/Credentials';

export async function admin(): Promise<
  | {
      isLoggedIn: true;
      admin: Admin;
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/admin')).json();
}

export async function login(credentials: Credentials): Promise<Admin> {
  const res = await fetch('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 332 реджектим промис если вернулся ошибочный статус
  // if (res.status >= 400) {
  //   const { error } = await res.json();
  //   throw error;
  // }

  return res.json();
}

export async function logout(): Promise<void> {
  await fetch('/logout', {
    method: 'POST',
  });
}
