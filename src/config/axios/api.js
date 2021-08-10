import { build_header } from '../../utils/build_header';
import axios from 'axios';

const config = {
    headers: build_header(),
};

export const api = {
    requestTimeSlots: () => {
        return axios.get(
            '/aalto/events/unicorndemo2025/time_slots',
            config)
    }
};
