import { put, call } from 'redux-saga/effects';
import { api } from '../config/axios/api'

import { FETCH_TIMESLOTS, FETCH_TIMESLOTS_SUCCESS, FETCH_TIMESLOTS_ERROR } from '../modules/timeslot/redux/types';

import {
    fetchTimeSlotsSuccess, setFetchTimeSlotsError
} from '../modules/timeslot/redux/actions';
import { fetchTimeSlotsSaga } from '../modules/timeslot/redux/saga';

describe('fetch timeslots using API', () => {

    it('Should call api and dispatch success action', async () => {
        const generator = fetchTimeSlotsSaga();

        expect(generator.next().value).toEqual(call(api.requestTimeSlots))
    });

    it('Should handle exception as expected', () => {
        const generator = fetchTimeSlotsSaga();

        expect(generator.next().value).toEqual(call(api.requestTimeSlots));

        expect(generator.throw('error').value)
            .toEqual(put(
                { type: FETCH_TIMESLOTS_ERROR, payload: "error" }
            ));
    })
})