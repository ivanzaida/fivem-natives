import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_SHAKING
 *
 * 0xDD87838D03B64B0A

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function isCamShaking(camera: CameraIndex): boolean {
	const isCamShaking_result = Citizen.invokeNative<boolean>('0xDD87838D03B64B0A', camera);
	return isCamShaking_result;
}