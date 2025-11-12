import { CameraIndex, ECamSplineNodeFlags } from '@ivanzaida/structures'

/**
 * CAM:ADD_CAM_SPLINE_NODE_USING_CAMERA_FRAME
 *
 * 0x327198ED493608E0

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
export function addCamSplineNodeUsingCameraFrame(camera: CameraIndex, sourceCamera: CameraIndex, duration: number, flags: ECamSplineNodeFlags | number = 3): void {
	const addCamSplineNodeUsingCameraFrame_result = Citizen.invokeNative<void>('0x327198ED493608E0', camera, sourceCamera, duration, flags);
	return addCamSplineNodeUsingCameraFrame_result;
}