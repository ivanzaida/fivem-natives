/**
 * CAM:INVALIDATE_IDLE_CAM
 *
 * 0x513E63C787EE96A7

 * 
 * Resets the idle camera timer. Calling that in a loop once every few seconds is enough to disable the idle cinematic camera.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function invalidateIdleCam(): void {
	const invalidateIdleCam_result = Citizen.invokeNative<void>('0x513E63C787EE96A7', );
	return invalidateIdleCam_result;
}