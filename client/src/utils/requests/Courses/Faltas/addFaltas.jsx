import { api } from '../../api';

export async function addFaltas(id, body) {
  return await api.put(`/turmas/adicionarFaltas/${id}`, body);
}