import { api } from '../../api';

export async function deleteFaltas(id, body) {
  return await api.put(`/turmas/deletarFaltas/${id}`, body);
}