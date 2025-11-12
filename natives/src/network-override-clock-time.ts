/**
 * NETWORK:NETWORK_OVERRIDE_CLOCK_TIME
 *
 * 0xAFD3BC0F6EBB5474

 * 
 * Works in Singleplayer too.
 * Passing wrong data (e.g. hours above 23) will cause the game to crash.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 */
export function networkOverrideClockTime(hour: number, minute: number, second: number): void {
	const networkOverrideClockTime_result = Citizen.invokeNative<void>('0xAFD3BC0F6EBB5474', hour, minute, second);
	return networkOverrideClockTime_result;
}