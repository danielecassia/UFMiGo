import { api } from "../api";

export async function listCoursesICEx() {
  const { data } = await api.get("materias");
  // console.log(data);
  return data.map((courseChip) => ({
    id: courseChip._id,
    nome: courseChip.nome,
    turma: courseChip.turma.join(''),
  }));
  // console.log(testee);
}