import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_DOF_STRENGTH
 *
 * 0xEDDF0C80A9EEE28A

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamDofStrength(camera: CameraIndex): number {
	const getCamDofStrength_result = Citizen.invokeNative<number>('0xEDDF0C80A9EEE28A', camera);
	return getCamDofStrength_result;
}