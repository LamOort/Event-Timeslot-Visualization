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
  data,
});

const setFetchTimeSlotsError = (err) => ({
  type: FETCH_TIMESLOTS_ERROR,
  err,
});

export { fetchTimeSlots, fetchTimeSlotsSuccess, setFetchTimeSlotsError };
