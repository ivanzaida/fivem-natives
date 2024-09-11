/**
 * CAM:GET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR
 *
 * 0x9B92BDBE805E7967

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFirstPersonAimCamZoomFactor(): number {
	const getFirstPersonAimCamZoomFactor_result = Citizen.invokeNative<number>('0x9B92BDBE805E7967', );
	return getFirstPersonAimCamZoomFactor_result;
}