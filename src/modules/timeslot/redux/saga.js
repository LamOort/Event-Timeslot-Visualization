import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

import {
  FETCH_TIMESLOTS,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TIMESLOTS_ERROR,
} from './types';

import { build_header } from '../../../utils/build_header';

function* fetchTimeSlotsSaga() {
  const config = {
    headers: build_header(),
  };
  try {
    const response = yield axios.get(
      '/aalto/events/unicorndemo2025/time_slots',
      config,
    );

    yield put({
      type: FETCH_TIMESLOTS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    yield put({ type: FETCH_TIMESLOTS_ERROR, payload: error });
  }
}

export function* watchFetchTimeSlots() {
  yield takeLatest(FETCH_TIMESLOTS, fetchTimeSlotsSaga);
}
