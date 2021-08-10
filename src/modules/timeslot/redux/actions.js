// Types
import {
  FETCH_TIMESLOTS,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TIMESLOTS_ERROR,
} from './types';

const fetchTimeSlots = () => ({
  type: FETCH_TIMESLOTS,
});

const fetchTimeSlotsSuccess = (data) => ({
  type: FETCH_TIMESLOTS_SUCCESS,
  payload: data,
});

const setFetchTimeSlotsError = (err) => ({
  type: FETCH_TIMESLOTS_ERROR,
  payload: err,
});

export { fetchTimeSlots, fetchTimeSlotsSuccess, setFetchTimeSlotsError };
