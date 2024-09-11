import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_NEAR_CLIP
 *
 * 0x3AAB5D3F3D4028CC

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} nearClip
 */
export function setCamNearClip(camera: CameraIndex, nearClip: number): void {
	const setCamNearClip_result = Citizen.invokeNative<void>('0x3AAB5D3F3D4028CC', camera, nearClip);
	return setCamNearClip_result;
}