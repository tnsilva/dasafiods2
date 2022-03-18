import { api } from "../../services/api/axiosConfig";

export interface UnicornDataProps {
  id?: any | null;
  name: string;
  since: string;
  colour: string;
  city?: string | null;
  logo?: string | null;
}

const getAll = () => {
  return api.get<Array<UnicornDataProps>>("unicorns");
};

const getById = (id: string) => {
  return api.get<UnicornDataProps>(`unicorns/${id}`);
};

const create = (unicorn: UnicornDataProps) => {
  return api.post<UnicornDataProps>("unicorns", unicorn);
};

const updateById = (unicorn: UnicornDataProps, id: any) => {
  return api.put<any>(`unicorns/${id}`, unicorn);
};

const deleteById = (id: any) => {
  return api.delete<any>(`unicorns/${id}`);
};

const deleteAll = () => {
  return api.delete<any>("unicorn");
};

const findByName = (name: string) => {
  return api.get<Array<UnicornDataProps>>(`unicorn?name=${name}`);
};

export const unicornService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  deleteAll,
  findByName,
};
