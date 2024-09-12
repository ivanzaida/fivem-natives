import { CameraIndex, Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_COORD
 *
 * 0xA452B06E281A9014

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {Vector3}  
 */
export function getCamCoord(camera: CameraIndex): Vector3 {
	const getCamCoord_result = Citizen.invokeNative<Vector3>('0xA452B06E281A9014', camera);
	return getCamCoord_result;
}