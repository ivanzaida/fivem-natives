import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_FAR_CLIP
 *
 * 0xEF763079652110C0

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamFarClip(camera: CameraIndex): number {
	const getCamFarClip_result = Citizen.invokeNative<number>('0xEF763079652110C0', camera);
	return getCamFarClip_result;
}