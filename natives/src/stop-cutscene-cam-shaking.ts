/**
 * CAM:STOP_CUTSCENE_CAM_SHAKING
 *
 * 0x4358D2A8023C82D3

 * 
 * ------------------------------------------------------------------
 * @param {boolean} stopImmediately If TRUE, the shake will stop immediately, otherwise it will enter its release phase and fade out.
 */
export function stopCutsceneCamShaking(stopImmediately: boolean = false): void {
	const stopCutsceneCamShaking_result = Citizen.invokeNative<void>('0x4358D2A8023C82D3', stopImmediately);
	return stopCutsceneCamShaking_result;
}