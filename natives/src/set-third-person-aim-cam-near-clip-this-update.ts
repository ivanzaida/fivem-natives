/**
 * CAM:SET_THIRD_PERSON_AIM_CAM_NEAR_CLIP_THIS_UPDATE
 *
 * 0x9696D418BC147507

 * 
 * ------------------------------------------------------------------
 * @param {number} nearClip
 */
export function setThirdPersonAimCamNearClipThisUpdate(nearClip: number): void {
	const setThirdPersonAimCamNearClipThisUpdate_result = Citizen.invokeNative<void>('0x9696D418BC147507', nearClip);
	return setThirdPersonAimCamNearClipThisUpdate_result;
}