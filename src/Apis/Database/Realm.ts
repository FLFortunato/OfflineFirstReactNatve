import Realm from 'realm';
import { DigimonSchema } from './Schemas/digimon.schema';
import { PokemonSchema } from './Schemas/pokemon.schema';
import { PostsSchema } from './Schemas/posts.schema';
import { RandomPhotosSchema } from './Schemas/randomPhotos.schema';
import { StoreSchema } from './Schemas/store.schema';
import { SyncQueueSchema } from './Schemas/syncQueue.schema';

let realm = new Realm({
  schema: [
    PostsSchema,
    DigimonSchema,
    PokemonSchema,
    SyncQueueSchema,
    StoreSchema,
    RandomPhotosSchema,
  ],
  schemaVersion: 5,
});

export default realm;
