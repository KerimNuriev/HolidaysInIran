/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type FormApplicationType from "./types/FormApplicationType";

 // eslint-disable-next-line import/prefer-default-export
 export async function tourApplication({application}: {application: FormApplicationType}): Promise<FormApplicationType> {
    const res = await fetch('/telegramBot', {
      method: 'POST',
      body: JSON.stringify({application}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } 
    throw new Error(data.message);
    
}


