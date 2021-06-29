import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateAndLocalize = (dateStr, format) => {
  return dayjs(dateStr).utc().format(format);
};
