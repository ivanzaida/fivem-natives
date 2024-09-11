/**
 * CAM:SET_FIRST_PERSON_AIM_CAM_NEAR_CLIP_THIS_UPDATE
 *
 * 0x668D3078E78F67B0

 * 
 * ------------------------------------------------------------------
 * @param {number} nearClip
 */
export function setFirstPersonAimCamNearClipThisUpdate(nearClip: number): void {
	const setFirstPersonAimCamNearClipThisUpdate_result = Citizen.invokeNative<void>('0x668D3078E78F67B0', nearClip);
	return setFirstPersonAimCamNearClipThisUpdate_result;
}