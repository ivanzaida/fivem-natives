/**
 * CAM:GET_FINAL_RENDERED_CAM_FOV
 *
 * 0xB99978989A0F4E57

 * 
 * Gets some camera fov
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamFov(): number {
	const getFinalRenderedCamFov_result = Citizen.invokeNative<number>('0xB99978989A0F4E57', );
	return getFinalRenderedCamFov_result;
}