import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_NEAR_CLIP
 *
 * 0x97410F245819ED32

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamNearClip(camera: CameraIndex): number {
	const getCamNearClip_result = Citizen.invokeNative<number>('0x97410F245819ED32', camera);
	return getCamNearClip_result;
}