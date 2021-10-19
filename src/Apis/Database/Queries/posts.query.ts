import { POSTS_KEY, POSTS_TABLE_NAME } from '../Schemas/posts.schema';
import { BaseQuery } from './base.query';
import { PostsModel } from '../Models/posts.model';

export const PostsQuery = BaseQuery<PostsModel>({
  schemaName: POSTS_TABLE_NAME,
  tableKey: POSTS_KEY,
});
