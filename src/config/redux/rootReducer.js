import { combineReducers } from 'redux';

import timeSlotReducer from '../../modules/timeslot/redux/reducer';

export default combineReducers({
  timeSlot: timeSlotReducer,
});
