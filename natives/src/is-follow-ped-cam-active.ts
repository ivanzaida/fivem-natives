/**
 * CAM:IS_FOLLOW_PED_CAM_ACTIVE
 *
 * 0x0E1259D809F0A778

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isFollowPedCamActive(): boolean {
	const isFollowPedCamActive_result = Citizen.invokeNative<boolean>('0x0E1259D809F0A778', );
	return isFollowPedCamActive_result;
}