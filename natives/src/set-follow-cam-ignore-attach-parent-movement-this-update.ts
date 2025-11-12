/**
 * CAM:SET_FOLLOW_CAM_IGNORE_ATTACH_PARENT_MOVEMENT_THIS_UPDATE
 *
 * 0x29F41DB9F1B4728A

 * 
 * Forces the active follow camera to ignore the movement of the attach parent when computing the follow orientation this update. (only) The follow camera will then rotate based upon control input only, similar to an aim camera. This setting automatically resets for safety.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setFollowCamIgnoreAttachParentMovementThisUpdate(): void {
	const setFollowCamIgnoreAttachParentMovementThisUpdate_result = Citizen.invokeNative<void>('0x29F41DB9F1B4728A', );
	return setFollowCamIgnoreAttachParentMovementThisUpdate_result;
}