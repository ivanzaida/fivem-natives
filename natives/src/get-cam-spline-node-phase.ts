import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_SPLINE_NODE_PHASE
 *
 * 0x5B4403BBB70E3566

 * 
 * I'm pretty sure the parameter is the camera as usual, but I am not certain so I'm going to leave it as is.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamSplineNodePhase(camera: CameraIndex): number {
	const getCamSplineNodePhase_result = Citizen.invokeNative<number>('0x5B4403BBB70E3566', camera);
	return getCamSplineNodePhase_result;
}