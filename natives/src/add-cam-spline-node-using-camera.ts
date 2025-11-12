import { CameraIndex, ECamSplineNodeFlags } from '@ivanzaida/structures'

/**
 * CAM:ADD_CAM_SPLINE_NODE_USING_CAMERA
 *
 * 0xF5317F0839442D94

 * 
 * p0 is the spline camera to which the node is being added.
 * p1 is the camera used to create the node.
 * p3 is always 3 in scripts. It might be smoothing style or rotation order.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {CameraIndex} sourceCamera
 * @param {number} duration
 * @param {ECamSplineNodeFlags} flags
 */
export function addCamSplineNodeUsingCamera(camera: CameraIndex, sourceCamera: CameraIndex, duration: number, flags: ECamSplineNodeFlags | number = 3): void {
	const addCamSplineNodeUsingCamera_result = Citizen.invokeNative<void>('0xF5317F0839442D94', camera, sourceCamera, duration, flags);
	return addCamSplineNodeUsingCamera_result;
}