import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimeSlots } from '../redux/actions';

/**
 * A hook to get timeslot data and loading state from redux store
 * @returns {{
 * timeSlotsData,
 * loading}}
 */

const useTimeSlot = () => {
  const dispatch = useDispatch();

  const { timeSlotsData, loading } = useSelector((state) => state.timeSlot);

  useEffect(() => {
    dispatch(fetchTimeSlots());
  }, []);

  return { timeSlotsData, loading };
};

export default useTimeSlot;
