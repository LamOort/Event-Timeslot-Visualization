// Types
import {
  FETCH_TIMESLOTS,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TIMESLOTS_ERROR,
} from './types';

export const initialState = {
  timeSlotsData: [],
  fetchError: null,
  loading: false,
};

const timeSlotReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIMESLOTS:
      return {
        ...state,
        fetchError: null,
        loading: true,
      };
    case FETCH_TIMESLOTS_SUCCESS:
      return {
        ...state,
        timeSlotsData: payload,
        fetchError: null,
        loading: false,
      };
    case FETCH_TIMESLOTS_ERROR:
      return {
        ...state,
        timeSlotsData: [],
        fetchError: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default timeSlotReducer;
