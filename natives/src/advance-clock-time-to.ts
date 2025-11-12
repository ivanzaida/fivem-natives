/**
 * CLOCK:ADVANCE_CLOCK_TIME_TO
 *
 * 0x77A5275126602303

 * 
 * if the new time is before the current time a day will pass on the date
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} h
 * @param {number} m
 * @param {number} s
 */
export function advanceClockTimeTo(h: number, m: number, s: number): void {
	const advanceClockTimeTo_result = Citizen.invokeNative<void>('0x77A5275126602303', h, m, s);
	return advanceClockTimeTo_result;
}