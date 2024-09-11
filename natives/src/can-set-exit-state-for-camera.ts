/**
 * CUTSCENE:CAN_SET_EXIT_STATE_FOR_CAMERA
 *
 * 0x2B60F53D06BC6971

 * 
 * ------------------------------------------------------------------
 * @param {boolean} hideNonRegisteredEntities Can be used when cutting the camera on the exit state, in order to avoid issues with non script registered entities remaining on screen for a frame.
 * @returns {boolean}  
 */
export function canSetExitStateForCamera(hideNonRegisteredEntities: boolean = false): boolean {
	const canSetExitStateForCamera_result = Citizen.invokeNative<boolean>('0x2B60F53D06BC6971', hideNonRegisteredEntities);
	return canSetExitStateForCamera_result;
}