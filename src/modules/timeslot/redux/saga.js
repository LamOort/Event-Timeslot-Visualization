import { takeLatest, put, call } from 'redux-saga/effects';
import { api } from '../../../config/axios/api';

import {
  FETCH_TIMESLOTS,
} from './types';

import {
  fetchTimeSlotsSuccess, setFetchTimeSlotsError
} from './actions';



export function* fetchTimeSlotsSaga() {

  try {
    const response = yield call(api.requestTimeSlots);

    yield put(fetchTimeSlotsSuccess(response.data.data));

    return response.status;
  } catch (error) {
    yield put(setFetchTimeSlotsError(error));
    return -1;
  }
}

export function* watchFetchTimeSlots() {
  yield takeLatest(FETCH_TIMESLOTS, fetchTimeSlotsSaga);
}
