import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_ACTIVE
 *
 * 0x4CBC5D1BC117616B

 * 
 * Set camera as active/inactive.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} activeState
 */
export function setCamActive(camera: CameraIndex, activeState: boolean): void {
	const setCamActive_result = Citizen.invokeNative<void>('0x4CBC5D1BC117616B', camera, activeState);
	return setCamActive_result;
}