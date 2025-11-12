/**
 * CUTSCENE:SET_PAD_CAN_SHAKE_DURING_CUTSCENE
 *
 * 0x9C22AADBAF330B36

 * 
 * Toggles a value (bool) for cutscenes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} vibrate
 */
export function setPadCanShakeDuringCutscene(vibrate: boolean): void {
	const setPadCanShakeDuringCutscene_result = Citizen.invokeNative<void>('0x9C22AADBAF330B36', vibrate);
	return setPadCanShakeDuringCutscene_result;
}