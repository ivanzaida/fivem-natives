/**
 * CAM:SET_SCRIPTED_CAMERA_IS_FIRST_PERSON_THIS_FRAME
 *
 * 0x2AFB778D9C7EA690

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isFirstPersonThisFrame If TRUE, scripted cameras are considered first person this frame
 */
export function setScriptedCameraIsFirstPersonThisFrame(isFirstPersonThisFrame: boolean = true): void {
	const setScriptedCameraIsFirstPersonThisFrame_result = Citizen.invokeNative<void>('0x2AFB778D9C7EA690', isFirstPersonThisFrame);
	return setScriptedCameraIsFirstPersonThisFrame_result;
}