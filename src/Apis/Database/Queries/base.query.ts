import realm from '../Realm';
import { v4 as uuidv4 } from 'uuid';
import { UpdateMode } from 'realm';

export const BaseQuery = <T>({
  schemaName,
  tableKey,
}: {
  schemaName: string;
  tableKey: string;
}) => {
  const create = (data: T) => {
    realm.write(() => {
      realm.create(schemaName, { ID: data.ID || uuidv4(), ...data });
    });
  };

  const createByList = (data: T[]) => {
    realm.write(() => {
      data?.forEach((item) => {
        realm.create(schemaName, { ID: uuidv4(), ...item });
      });
    });
  };

  const findBy = (field: string, value: any) => {
    const results = realm.objects(schemaName)?.filtered(`${field} = $0`, value);

    return Array.from(results);
  };

  const queryBy = (query: string) => {
    const data = realm.objects(schemaName);

    const filtered = data.filtered(query);

    return filtered;
  };

  const list = () => {
    const results = realm.objects(schemaName);
    return Array.from(results);
  };

  const update = (data: any) => {
    const primaryKey = data[tableKey];
    realm.write(() => {
      realm.create(
        schemaName,
        Object({ [tableKey]: primaryKey, ...data }),
        UpdateMode.Modified
      );
    });
  };

  const remove = (data: any) => {
    const value = 'id';
    return `Object from ${JSON.stringify(data)} has been deleted`;
  };

  return {
    create,
    list,
    queryBy,
    remove,
    createByList,
    findBy,
    update,
  };
};
