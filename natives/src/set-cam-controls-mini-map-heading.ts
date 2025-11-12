import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_CONTROLS_MINI_MAP_HEADING
 *
 * 0x29BBAB7031C36984

 * 
 * Rotates the radar to match the camera's Z rotation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} state
 */
export function setCamControlsMiniMapHeading(camera: CameraIndex, state: boolean): void {
	const setCamControlsMiniMapHeading_result = Citizen.invokeNative<void>('0x29BBAB7031C36984', camera, state);
	return setCamControlsMiniMapHeading_result;
}