import { CameraIndex, ECamSplineNodeFlags } from '@ivanzaida/structures'

/**
 * CAM:ADD_CAM_SPLINE_NODE_USING_GAMEPLAY_FRAME
 *
 * 0x471C8924B79628DE

 * 
 * p2 is always 2 in scripts. It might be smoothing style or rotation order.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} duration
 * @param {ECamSplineNodeFlags} flags
 */
export function addCamSplineNodeUsingGameplayFrame(camera: CameraIndex, duration: number, flags: ECamSplineNodeFlags | number = 3): void {
	const addCamSplineNodeUsingGameplayFrame_result = Citizen.invokeNative<void>('0x471C8924B79628DE', camera, duration, flags);
	return addCamSplineNodeUsingGameplayFrame_result;
}