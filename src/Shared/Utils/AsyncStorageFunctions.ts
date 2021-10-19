import { StoreModel } from '../../Apis/Database/Models/storage.model';
import { StoreQuery } from '../../Apis/Database/Queries/store.query';

export const setItem = (key: string, value: string) => {
  const obj: StoreModel = {
    key,
    value,
  };
  return StoreQuery.create(obj);
};

export const getItem = (key: string): any => {
  const result = StoreQuery.queryBy(`key == '${key}'`);

  return result?.[0]?.value;
};

export const deleteItem = (key: string) => {
  const result = StoreQuery.queryBy(`key == '${key}'`);
  StoreQuery.remove(result);
};
