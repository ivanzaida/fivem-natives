/**
 * CLOCK:GET_CLOCK_YEAR
 *
 * 0x7598FE4545010A75

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getClockYear(): number {
	const getClockYear_result = Citizen.invokeNative<number>('0x7598FE4545010A75', );
	return getClockYear_result;
}