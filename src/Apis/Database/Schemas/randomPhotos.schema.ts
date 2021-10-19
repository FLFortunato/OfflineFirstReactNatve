export const RANDOM_PHOTOS_TABLE_NAME = 'RandomPhotos';
export const RANDOM_PHOTOS_TABLE_KEY = 'ID';

export const RandomPhotosSchema = {
  name: RANDOM_PHOTOS_TABLE_NAME,
  primaryKey: RANDOM_PHOTOS_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    albumId: 'int',
    id: 'int',
    title: 'string',
    url: 'string',
    thumbnailUrl: 'string',
  },
};
