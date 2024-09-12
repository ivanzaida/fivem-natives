import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:DETACH_CAM
 *
 * 0x9BC35A57CAC5458D

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 */
export function detachCam(camera: CameraIndex): void {
	const detachCam_result = Citizen.invokeNative<void>('0x9BC35A57CAC5458D', camera);
	return detachCam_result;
}