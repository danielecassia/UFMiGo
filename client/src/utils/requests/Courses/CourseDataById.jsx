import { api } from "../api";

export async function CourseDataById(id) {
  const { data } = await api.get(`dadosTurma/${id}`);
  console.log(data);
  return data
}