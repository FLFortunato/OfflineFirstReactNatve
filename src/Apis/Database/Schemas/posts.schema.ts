export const POSTS_TABLE_NAME = 'Posts';
export const POSTS_KEY = 'ID';

export const PostsSchema = {
  name: POSTS_TABLE_NAME,
  primaryKey: POSTS_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    title: 'string',
    author: 'string',
    content: 'string',
  },
};
