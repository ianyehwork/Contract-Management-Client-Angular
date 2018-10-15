
const BASE_10 = 10;

/**
 * Convert date and time to milisecond since January 01 1970
 * @param {*} date YYYY-MM-DD
 * @param {*} time hh:mmAM or hh:mmPM
 * @returns number in milisecond since January 01 1970
 */
export const convertDateTimeToNumber = (date: string, time: string) => {
    const date_component = date.split('-');
    // JavaScript counts months from 0 to 11. January is 0. December is 11
    const month = parseInt(date_component[1], BASE_10) - 1;
    const day = parseInt(date_component[2], BASE_10);
    const year = parseInt(date_component[0], BASE_10);

    const time_indicator = time.substr(time.length - 2);
    const time_component = time.substr(0, time.length - 2).split(':');
    let hour = parseInt(time_component[0], BASE_10);
    if (time_indicator === 'PM' && hour !== 12) {
        hour += 12;
    }
    const minute = parseInt(time_component[1], BASE_10);

    const d = new Date(year, month, day, hour, minute, 0, 0);
    return d.getTime();
};

export const convertNumberToDateTime = (datetime: number): {dateStr: string, timeStr: string} => {
    const d = new Date(datetime);
    const dateStr = `${d.getFullYear()}-${d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)}-${d.getDate() < 10 ? '0' + (d.getDate()) : (d.getDate())}`;
    const timeStr = `${d.getHours() > 12 ? d.getHours() - 12 : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}${d.getHours() < 12 ? 'AM' : 'PM'}`;
    return {
        dateStr,
        timeStr
    };
};
