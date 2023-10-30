/* eslint-disable no-continue */
import dayjs from 'dayjs';
import zhcn from 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

/** 初始化dayjs一些配置 */
export const initDayjs = () => {
    dayjs.locale(zhcn);
    dayjs.extend(relativeTime);
    dayjs.extend(utc);
    dayjs.extend(timezone);
};
