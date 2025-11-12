/**
 * MISC:TOGGLE_SHOW_OPTIONAL_STUNT_JUMP_CAMERA
 *
 * 0xCE366B3838FC5CC5

 * 
 * enable/disable optional stunt camera
 * 
 * Toggles some stunt jump stuff.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} show
 */
export function toggleShowOptionalStuntJumpCamera(show: boolean): void {
	const toggleShowOptionalStuntJumpCamera_result = Citizen.invokeNative<void>('0xCE366B3838FC5CC5', show);
	return toggleShowOptionalStuntJumpCamera_result;
}