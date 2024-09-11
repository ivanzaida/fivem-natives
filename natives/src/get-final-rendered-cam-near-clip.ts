/**
 * CAM:GET_FINAL_RENDERED_CAM_NEAR_CLIP
 *
 * 0x8AB042CB33EAECD2

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamNearClip(): number {
	const getFinalRenderedCamNearClip_result = Citizen.invokeNative<number>('0x8AB042CB33EAECD2', );
	return getFinalRenderedCamNearClip_result;
}