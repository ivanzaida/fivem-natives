import { UgcDate } from '@ivanzaida/structures'

/**
 * NETWORK:CONVERT_POSIX_TIME
 *
 * 0xB2D05034AF8E75CF

 * 
 * Return cloud time as int (in seconds since midnight 1970-01-01)
 * This will not do what you expect after sometime in ~2038
 * 
 * Takes the specified time and writes it to the structure specified in the second argument.
 * 
 * struct date_time
 * {
 *     int year;
 *     int PADDING1;
 *     int month;
 *     int PADDING2;
 *     int day;
 *     int PADDING3;
 *     int hour;
 *     int PADDING4;
 *     int minute;
 *     int PADDING5;
 *     int second;
 *     int PADDING6;
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} content
 * @param {UgcDate} date [Ref]
 */
export function convertPosixTime(content: number, date: UgcDate /* ptr */): void {
	const convertPosixTime_result = Citizen.invokeNative<void>('0xB2D05034AF8E75CF', content, date.dataView);
	return convertPosixTime_result;
}