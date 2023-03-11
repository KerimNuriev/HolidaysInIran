import type DayType from "./types/DayType";

export async function loadDays(): Promise<DayType[]> {
    const res = await fetch('/api/day')
    return res.json();
}

