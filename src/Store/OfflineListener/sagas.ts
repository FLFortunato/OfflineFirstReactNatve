import { put, take, spawn, all } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import NetInfo from '@react-native-community/netinfo';
import { SyncQueueService } from '../../Apis/Service/syncQueue.service';

export function* startWatchingNetworkConnectivity(): any {
  const channel = eventChannel((emitter) => {
    const unsubcribe = NetInfo.addEventListener((state) =>
      emitter(state.isConnected)
    );
    return () => unsubcribe();
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield SyncQueueService().flushAllPendingItems();
      } else {
        yield console.log('Offline');
      }
    }
  } finally {
    channel.close();
  }
}

export default all([spawn(startWatchingNetworkConnectivity)]);
