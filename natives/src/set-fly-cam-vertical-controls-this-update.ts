import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_FLY_CAM_VERTICAL_CONTROLS_THIS_UPDATE
 *
 * 0xDB27323F0C5EE8D9

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 */
export function setFlyCamVerticalControlsThisUpdate(camera: CameraIndex): void {
	const setFlyCamVerticalControlsThisUpdate_result = Citizen.invokeNative<void>('0xDB27323F0C5EE8D9', camera);
	return setFlyCamVerticalControlsThisUpdate_result;
}