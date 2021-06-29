import { all } from 'redux-saga/effects';
import { watchFetchTimeSlots } from '../../modules/timeslot/redux/saga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchFetchTimeSlots()]);
}
