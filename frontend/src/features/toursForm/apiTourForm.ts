import type FormApplicationType from "./types/FormApplicationType";

 async function tourApplication({application}: {application: FormApplicationType}): Promise<FormApplicationType> {
    const res = await fetch('/telegramBot', {
      method: 'POST',
      body: JSON.stringify(application),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.json();
}
export default tourApplication;

