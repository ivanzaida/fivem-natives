/**
 * CLOCK:SET_CLOCK_TIME
 *
 * 0xCBE10A13619B9FAA

 * 
 * SET_CLOCK_TIME(12, 34, 56);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} h
 * @param {number} m
 * @param {number} s
 */
export function setClockTime(h: number, m: number, s: number): void {
	const setClockTime_result = Citizen.invokeNative<void>('0xCBE10A13619B9FAA', h, m, s);
	return setClockTime_result;
}