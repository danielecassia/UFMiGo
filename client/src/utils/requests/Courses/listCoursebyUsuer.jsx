import { api } from "../api";

export async function listCoursebyUsuer() {
  const { data } = await api.get("turmas");
  console.log(data);
  return data.map((courseChip) => ({
    id: courseChip._id,
    codigo: courseChip.codigo,
    nome: courseChip.nome,
    faltas: courseChip.faltas,

  }));
}