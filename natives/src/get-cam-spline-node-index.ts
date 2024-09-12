import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_SPLINE_NODE_INDEX
 *
 * 0x9A48A1707E9DECA8

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamSplineNodeIndex(camera: CameraIndex): number {
	const getCamSplineNodeIndex_result = Citizen.invokeNative<number>('0x9A48A1707E9DECA8', camera);
	return getCamSplineNodeIndex_result;
}