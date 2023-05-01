import { api } from "../api";

export async function postCourse(body) {
  const res = await api.post("turmas/nova", body);
}
