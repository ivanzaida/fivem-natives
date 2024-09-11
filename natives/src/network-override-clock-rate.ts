/**
 * NETWORK:NETWORK_OVERRIDE_CLOCK_RATE
 *
 * 0x2B7C09622E980A72

 * 
 * ------------------------------------------------------------------
 * @param {number} msPerGameMinute
 */
export function networkOverrideClockRate(msPerGameMinute: number): void {
	const networkOverrideClockRate_result = Citizen.invokeNative<void>('0x2B7C09622E980A72', msPerGameMinute);
	return networkOverrideClockRate_result;
}