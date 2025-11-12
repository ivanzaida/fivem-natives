/**
 * CAM:SET_GAMEPLAY_HINT_CAMERA_RELATIVE_SIDE_OFFSET
 *
 * 0x4302C09C88CF5356

 * 
 * Call at the start of the hint to avoid pops.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sideOffset
 */
export function setGameplayHintCameraRelativeSideOffset(sideOffset: number): void {
	const setGameplayHintCameraRelativeSideOffset_result = Citizen.invokeNative<void>('0x4302C09C88CF5356', sideOffset);
	return setGameplayHintCameraRelativeSideOffset_result;
}