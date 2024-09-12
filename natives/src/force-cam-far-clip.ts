import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:FORCE_CAM_FAR_CLIP
 *
 * 0xFA4389643D1609AE

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} farClip
 */
export function forceCamFarClip(camera: CameraIndex, farClip: number): void {
	const forceCamFarClip_result = Citizen.invokeNative<void>('0xFA4389643D1609AE', camera, farClip);
	return forceCamFarClip_result;
}