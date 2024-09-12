/**
 * CAM:GET_GAMEPLAY_CAM_FOV
 *
 * 0x9FA6E15C7A998E4F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGameplayCamFov(): number {
	const getGameplayCamFov_result = Citizen.invokeNative<number>('0x9FA6E15C7A998E4F', );
	return getGameplayCamFov_result;
}