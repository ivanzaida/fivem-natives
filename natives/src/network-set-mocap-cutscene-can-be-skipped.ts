/**
 * CUTSCENE:NETWORK_SET_MOCAP_CUTSCENE_CAN_BE_SKIPPED
 *
 * 0xF74640C4B28C71BD

 * 
 * Stops current cutscene with a fade transition
 * p0: always true in R Scripts
 * You will need to manually fade the screen back in
 * SET_CUTSCENE_INPUTS_PARTIALLY_FADE?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} skip
 */
export function networkSetMocapCutsceneCanBeSkipped(skip: boolean): void {
	const networkSetMocapCutsceneCanBeSkipped_result = Citizen.invokeNative<void>('0xF74640C4B28C71BD', skip);
	return networkSetMocapCutsceneCanBeSkipped_result;
}