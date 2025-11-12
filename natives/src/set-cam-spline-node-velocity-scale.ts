import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_NODE_VELOCITY_SCALE
 *
 * 0x4BEFD5824C6D529A

 * 
 * Nodes must be setup first before this is called.  Linearly interpolates between previous and next node's velocity.  Disabled if zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} node
 * @param {number} scale
 */
export function setCamSplineNodeVelocityScale(camera: CameraIndex, node: number, scale: number): void {
	const setCamSplineNodeVelocityScale_result = Citizen.invokeNative<void>('0x4BEFD5824C6D529A', camera, node, scale);
	return setCamSplineNodeVelocityScale_result;
}