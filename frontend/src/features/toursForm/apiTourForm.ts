/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type FormApplicationType from "./types/FormApplicationType";

async function tourApplication({application}: {application: FormApplicationType}): Promise<void> {
    const res = await fetch('/api/telegramBot', {
      method: 'POST',
      body: JSON.stringify(application),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      console.log('ok')
    }
}

export default tourApplication;

