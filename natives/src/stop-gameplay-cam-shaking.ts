/**
 * CAM:STOP_GAMEPLAY_CAM_SHAKING
 *
 * 0x9AFEC71EEA2F7754

 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately If TRUE, the shake will stop immediately, otherwise it will enter its release phase and fade out.
 */
export function stopGameplayCamShaking(stopImmediately: boolean = false): void {
	const stopGameplayCamShaking_result = Citizen.invokeNative<void>('0x9AFEC71EEA2F7754', stopImmediately);
	return stopGameplayCamShaking_result;
}