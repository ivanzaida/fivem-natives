import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_USE_SHALLOW_DOF_MODE
 *
 * 0x3089A583C66DAC0E

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} state
 */
export function setCamUseShallowDofMode(camera: CameraIndex, state: boolean): void {
	const setCamUseShallowDofMode_result = Citizen.invokeNative<void>('0x3089A583C66DAC0E', camera, state);
	return setCamUseShallowDofMode_result;
}