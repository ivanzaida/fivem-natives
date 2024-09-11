/**
 * CLOCK:ADD_TO_CLOCK_TIME
 *
 * 0x2C9A2F8762B95F5C

 * 
 * ------------------------------------------------------------------
 * @param {number} h
 * @param {number} m
 * @param {number} s
 */
export function addToClockTime(h: number, m: number, s: number): void {
	const addToClockTime_result = Citizen.invokeNative<void>('0x2C9A2F8762B95F5C', h, m, s);
	return addToClockTime_result;
}