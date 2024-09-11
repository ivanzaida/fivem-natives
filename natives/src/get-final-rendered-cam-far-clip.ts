/**
 * CAM:GET_FINAL_RENDERED_CAM_FAR_CLIP
 *
 * 0xD787990C7B67C7F0

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamFarClip(): number {
	const getFinalRenderedCamFarClip_result = Citizen.invokeNative<number>('0xD787990C7B67C7F0', );
	return getFinalRenderedCamFarClip_result;
}