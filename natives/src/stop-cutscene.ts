/**
 * CUTSCENE:STOP_CUTSCENE
 *
 * 0xB479965CBAA3EAE1

 * 
 * ------------------------------------------------------------------
 * @param {boolean} deleteRegisteredEntityIfNotGrabbedByScript
 */
export function stopCutscene(deleteRegisteredEntityIfNotGrabbedByScript: boolean = false): void {
	const stopCutscene_result = Citizen.invokeNative<void>('0xB479965CBAA3EAE1', deleteRegisteredEntityIfNotGrabbedByScript);
	return stopCutscene_result;
}