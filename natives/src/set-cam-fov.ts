import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_FOV
 *
 * 0x58BDA5D9262F5D30

 * 
 * Sets the field of view of the cam.
 * ---------------------------------------------
 * Min: 1.0f
 * Max: 130.0f
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} fov
 */
export function setCamFov(camera: CameraIndex, fov: number): void {
	const setCamFov_result = Citizen.invokeNative<void>('0x58BDA5D9262F5D30', camera, fov);
	return setCamFov_result;
}