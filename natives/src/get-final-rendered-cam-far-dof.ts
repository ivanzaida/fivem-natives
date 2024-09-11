/**
 * CAM:GET_FINAL_RENDERED_CAM_FAR_DOF
 *
 * 0xBAAC16D46CDF2FFE

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamFarDof(): number {
	const getFinalRenderedCamFarDof_result = Citizen.invokeNative<number>('0xBAAC16D46CDF2FFE', );
	return getFinalRenderedCamFarDof_result;
}