/**
 * CAM:SET_GAMEPLAY_HINT_CAMERA_BLEND_TO_FOLLOW_PED_MEDIUM_VIEW_MODE
 *
 * 0xD5864F7F5BC214FF

 * 
 * Call at the start of the hint to avoid pops.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setGameplayHintCameraBlendToFollowPedMediumViewMode(state: boolean): void {
	const setGameplayHintCameraBlendToFollowPedMediumViewMode_result = Citizen.invokeNative<void>('0xD5864F7F5BC214FF', state);
	return setGameplayHintCameraBlendToFollowPedMediumViewMode_result;
}