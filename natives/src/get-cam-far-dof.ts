import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_FAR_DOF
 *
 * 0x2221B1FEFEE35449

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamFarDof(camera: CameraIndex): number {
	const getCamFarDof_result = Citizen.invokeNative<number>('0x2221B1FEFEE35449', camera);
	return getCamFarDof_result;
}