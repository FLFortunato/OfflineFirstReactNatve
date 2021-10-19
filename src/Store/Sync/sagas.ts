import { all, put, takeEvery } from '@redux-saga/core/effects';
import { syncEntityArray } from '../../Services/syncDataService';
import { setItem } from '../../Shared/Utils/AsyncStorageFunctions';
import { syncLoading } from './actions';
import { TRIGGER_SYNC } from './types';

function* triggerSync({ payload: { navigation, dispatch } }: any) {
  requestAnimationFrame(async () => {
    dispatch(
      syncLoading({
        loading: true,
        status: { description: 'Iniciando a sincronização' },
      })
    );

    let finishedCount = 0;
    for (const item of syncEntityArray) {
      try {
        await item.sync().then((res) => {
          finishedCount++;

          // Updates the percentage
          const percentage =
            (finishedCount <= 0 ? 1 : finishedCount) *
            (100 / syncEntityArray.length);

          dispatch(
            syncLoading({
              status: {
                description: `Sincronizando ${item.tableName}`,
                percentage: `${percentage?.toFixed(0)}%`,
              },
              loading: true,
            })
          );
          if (finishedCount === syncEntityArray?.length) {
            setItem('finishedSyncing', 'true');

            dispatch(
              syncLoading({
                loading: false,
                status: { description: 'Finalizado' },
              })
            );
            navigation.navigate('Home');
          }
        });
      } catch (error) {
        dispatch(
          syncLoading({
            loading: false,
          })
        );
      }
    }
  });
}

export default all([takeEvery(TRIGGER_SYNC, triggerSync)]);
