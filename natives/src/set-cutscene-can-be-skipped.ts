/**
 * CUTSCENE:SET_CUTSCENE_CAN_BE_SKIPPED
 *
 * 0xEB234554CFDE9162

 * 
 * ------------------------------------------------------------------
 * @param {boolean} canBeSkipped
 */
export function setCutsceneCanBeSkipped(canBeSkipped: boolean): void {
	const setCutsceneCanBeSkipped_result = Citizen.invokeNative<void>('0xEB234554CFDE9162', canBeSkipped);
	return setCutsceneCanBeSkipped_result;
}