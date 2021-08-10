// Types
import {
    FETCH_TIMESLOTS,
    FETCH_TIMESLOTS_SUCCESS,
    FETCH_TIMESLOTS_ERROR,
} from '../modules/timeslot/redux/types';
import TimeSlotReducer from '../modules/timeslot/redux/reducer'
import { initialState } from '../modules/timeslot/redux/reducer'

describe('Timeslot Reducer', () => {
    it('Should return initial state', () => {
        const newState = TimeSlotReducer(undefined, initialState);
        expect(newState).toEqual({
            timeSlotsData: [],
            fetchError: null,
            loading: false,
        });
    });

    it('Should return new state if receing actions', () => {

        const mockTimeslotData = []
        const newState = TimeSlotReducer(undefined, {
            type: FETCH_TIMESLOTS_SUCCESS,
            payload: mockTimeslotData
        })


        expect(newState).toEqual({
            timeSlotsData: mockTimeslotData,
            fetchError: null,
            loading: false,
        })
    })

});