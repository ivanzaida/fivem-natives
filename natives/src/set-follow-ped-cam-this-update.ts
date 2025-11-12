/**
 * CAM:SET_FOLLOW_PED_CAM_THIS_UPDATE
 *
 * 0x3A7305BBF26DBF65

 * 
 * Can be safely called at any time, but will only have a visible effect when a follow-ped gameplay camera is rendering.
 * 
 * From the scripts:
 * 
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ATTACHED_TO_ROPE_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ON_EXILE1_LADDER_CAMERA", 1500);
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 3000);
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_FAMILY5_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cameraName
 * @param {number} interpolationDuration
 * @returns {boolean}  
 */
export function setFollowPedCamThisUpdate(cameraName: string, interpolationDuration: number = 1000): boolean {
	const setFollowPedCamThisUpdate_result = Citizen.invokeNative<boolean>('0x3A7305BBF26DBF65', cameraName, interpolationDuration);
	return setFollowPedCamThisUpdate_result;
}