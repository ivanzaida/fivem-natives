import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_FAR_CLIP
 *
 * 0x8397B3389E13A5E5

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} farClip
 */
export function setCamFarClip(camera: CameraIndex, farClip: number): void {
	const setCamFarClip_result = Citizen.invokeNative<void>('0x8397B3389E13A5E5', camera, farClip);
	return setCamFarClip_result;
}