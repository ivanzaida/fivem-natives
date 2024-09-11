/**
 * CAM:GET_FINAL_RENDERED_CAM_MOTION_BLUR_STRENGTH
 *
 * 0xB75F36052800046D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getFinalRenderedCamMotionBlurStrength(): number {
	const getFinalRenderedCamMotionBlurStrength_result = Citizen.invokeNative<number>('0xB75F36052800046D', );
	return getFinalRenderedCamMotionBlurStrength_result;
}