import { api } from "../api";

export async function deleteCourse(id) {
  return await api.delete(`/turmas/delete/${id}`);
}
