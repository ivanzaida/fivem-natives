/**
 * NETWORK:NETWORK_SET_TASK_CUTSCENE_INSCOPE_MULTIPLER
 *
 * 0x44EF980B0D19828F

 * 
 * A value between 1.0 and 5.0
 * 
 * _NETWORK_SET_TASK_CUTSCENE_PROXIMITY_SCALE?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function networkSetTaskCutsceneInscopeMultipler(multiplier: number): void {
	const networkSetTaskCutsceneInscopeMultipler_result = Citizen.invokeNative<void>('0x44EF980B0D19828F', multiplier);
	return networkSetTaskCutsceneInscopeMultipler_result;
}