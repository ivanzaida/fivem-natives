import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_INTERPOLATING
 *
 * 0x323C4A67159DAD02

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function isCamInterpolating(camera: CameraIndex): boolean {
	const isCamInterpolating_result = Citizen.invokeNative<boolean>('0x323C4A67159DAD02', camera);
	return isCamInterpolating_result;
}