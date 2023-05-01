import { api } from "../api";

export async function postMateria(id) {
  const res = await api.post("turmas/nova", id);
  console.log(res);
}
