import { CameraIndex, ECamSplineNodeFlags } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_NODE_EASE
 *
 * 0xA054197DA0CA8B1B

 * 
 * Nodes must be setup first, then the linear flag can be modified.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} node
 * @param {ECamSplineNodeFlags} flags
 * @param {number} scale
 */
export function setCamSplineNodeEase(camera: CameraIndex, node: number, flags: ECamSplineNodeFlags | number, scale: number = 1): void {
	const setCamSplineNodeEase_result = Citizen.invokeNative<void>('0xA054197DA0CA8B1B', camera, node, flags, scale);
	return setCamSplineNodeEase_result;
}