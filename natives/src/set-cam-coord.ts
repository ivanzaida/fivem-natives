import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_COORD
 *
 * 0x1761457F86AD0EE2

 * 
 * Sets the position of the cam.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 */
export function setCamCoord(camera: CameraIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number): void {
	const setCamCoord_result = Citizen.invokeNative<void>('0x1761457F86AD0EE2', camera, newCoorsX, newCoorsY, newCoorsZ);
	return setCamCoord_result;
}