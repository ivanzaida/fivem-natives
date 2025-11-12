import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_AFFECTS_AIMING
 *
 * 0xD49F2340555F9E5D

 * 
 * Allows you to aim and shoot at the direction the camera is facing.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} state
 */
export function setCamAffectsAiming(camera: CameraIndex, state: boolean): void {
	const setCamAffectsAiming_result = Citizen.invokeNative<void>('0xD49F2340555F9E5D', camera, state);
	return setCamAffectsAiming_result;
}