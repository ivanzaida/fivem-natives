import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_NEAR_DOF
 *
 * 0x4329E0C9A71DAF53

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamNearDof(camera: CameraIndex): number {
	const getCamNearDof_result = Citizen.invokeNative<number>('0x4329E0C9A71DAF53', camera);
	return getCamNearDof_result;
}