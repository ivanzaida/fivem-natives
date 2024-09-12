import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_FOV
 *
 * 0x4A1D1AB55229AAF0

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamFov(camera: CameraIndex): number {
	const getCamFov_result = Citizen.invokeNative<number>('0x4A1D1AB55229AAF0', camera);
	return getCamFov_result;
}