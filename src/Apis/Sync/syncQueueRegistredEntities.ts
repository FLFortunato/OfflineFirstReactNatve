import { PostsSync } from './Posts';

export const SyncQueueRegisteredEntities: any = {
  Posts: PostsSync(),
};

export enum SyncQueueRegisteredEntitiesNames {
  Posts = 'Posts',
}
