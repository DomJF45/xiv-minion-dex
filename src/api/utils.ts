import { iMinion } from "../interfaces/minion.interface";

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow'
}

export async function getMinionList(load: number) {
  const data = await fetch(`https://ffxivcollect.com/api/minions?limit=${load.toString()}`)
    .then((res) => res.json());
  return data.results;
}

export async function searchMinion(search: string, load: number): Promise<iMinion[]> {
  const data = await fetch(`https://ffxivcollect.com/api/minions?name_en_start=${search}&limit=${load}`, requestOptions)
    .then((res) => res.json());
  return data.results;
}

export async function getMinionById(id: string) {
  const data = await fetch(`https://ffxivcollect.com/api/minions/${id}`, requestOptions)
    .then((res) => res.json());
  return data;
}
