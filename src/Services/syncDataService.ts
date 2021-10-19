import { PostsSync } from '../Apis/Sync/Posts';
import { RandomPhotosSync } from '../Apis/Sync/RandomPhotos';

export const syncEntityArray = [PostsSync(), RandomPhotosSync()];
