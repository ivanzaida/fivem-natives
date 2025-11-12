/**
 * CAM:SET_GAMEPLAY_HINT_CAMERA_RELATIVE_VERTICAL_OFFSET
 *
 * 0x640D5D2C8DE912A2

 * 
 * Call at the start of the hint to avoid pops.
 * This will cause the camera to pull back to frame the player correctly,
 * May need to use in conjunction with the SET_GAMEPLAY_HINT_FOLLOW_DISTANCE_SCALAR
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} verticalOffset
 */
export function setGameplayHintCameraRelativeVerticalOffset(verticalOffset: number): void {
	const setGameplayHintCameraRelativeVerticalOffset_result = Citizen.invokeNative<void>('0x640D5D2C8DE912A2', verticalOffset);
	return setGameplayHintCameraRelativeVerticalOffset_result;
}