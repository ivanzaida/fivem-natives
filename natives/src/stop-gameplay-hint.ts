/**
 * CAM:STOP_GAMEPLAY_HINT
 *
 * 0x3C44EF9027A21847

 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately If TRUE, the hint camera will stop immediately, otherwise it will enter its release phase.
 */
export function stopGameplayHint(stopImmediately: boolean = false): void {
	const stopGameplayHint_result = Citizen.invokeNative<void>('0x3C44EF9027A21847', stopImmediately);
	return stopGameplayHint_result;
}