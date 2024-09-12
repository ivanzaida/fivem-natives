/**
 * CFX:RESET_FLY_THROUGH_WINDSCREEN_PARAMS
 *
 * 0X6D712937

 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 * 
 * ------------------------------------------------------------------
 */
export function resetFlyThroughWindscreenParams(): void {
	const resetFlyThroughWindscreenParams_result = Citizen.invokeNative<void>('0X6D712937', );
	return resetFlyThroughWindscreenParams_result;
}