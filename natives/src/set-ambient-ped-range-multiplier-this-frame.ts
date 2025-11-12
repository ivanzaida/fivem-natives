/**
 * PATHFIND:SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME
 *
 * 0xF9372EC61E6191AF

 * 
 * Applies a multiplier to the distances used for spawning/removing ambient peds
 * Should be called every frame for the duration that it is required.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setAmbientPedRangeMultiplierThisFrame(multiplier: number): void {
	const setAmbientPedRangeMultiplierThisFrame_result = Citizen.invokeNative<void>('0xF9372EC61E6191AF', multiplier);
	return setAmbientPedRangeMultiplierThisFrame_result;
}