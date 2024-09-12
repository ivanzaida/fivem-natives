/**
 * CAM:STOP_CODE_GAMEPLAY_HINT
 *
 * 0x2515D479F116B7AA

 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately
 */
export function stopCodeGameplayHint(stopImmediately: boolean): void {
	const stopCodeGameplayHint_result = Citizen.invokeNative<void>('0x2515D479F116B7AA', stopImmediately);
	return stopCodeGameplayHint_result;
}