import { all } from 'redux-saga/effects';
import { watchFetchTimeSlots } from '../../modules/timeslot/redux/saga';


export default function* rootSaga() {
  yield all([watchFetchTimeSlots()]);
}
