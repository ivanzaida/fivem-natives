/**
 * PLAYER:GET_ARE_CAMERA_CONTROLS_DISABLED
 *
 * 0x3CC2AA893E5C4911

 * 
 * Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.
 * 
 * Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getAreCameraControlsDisabled(): boolean {
	const getAreCameraControlsDisabled_result = Citizen.invokeNative<boolean>('0x3CC2AA893E5C4911', );
	return getAreCameraControlsDisabled_result;
}