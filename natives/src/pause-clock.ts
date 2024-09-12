/**
 * CLOCK:PAUSE_CLOCK
 *
 * 0xB9C1EC5EDDAAA115

 * 
 * ------------------------------------------------------------------
 * @param {boolean} pause
 */
export function pauseClock(pause: boolean): void {
	const pauseClock_result = Citizen.invokeNative<void>('0xB9C1EC5EDDAAA115', pause);
	return pauseClock_result;
}