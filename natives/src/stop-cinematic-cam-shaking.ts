/**
 * CAM:STOP_CINEMATIC_CAM_SHAKING
 *
 * 0xDB37962FDFC63FD7

 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately If TRUE, the shake will stop immediately, otherwise it will enter its release phase and fade out.
 */
export function stopCinematicCamShaking(stopImmediately: boolean = false): void {
	const stopCinematicCamShaking_result = Citizen.invokeNative<void>('0xDB37962FDFC63FD7', stopImmediately);
	return stopCinematicCamShaking_result;
}