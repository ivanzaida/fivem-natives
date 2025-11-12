import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_FOCUS_DISTANCE_BIAS
 *
 * 0xB44FCE2D38FDEDFE

 * 
 * This native has a name defined inside its code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} distanceBias
 */
export function setCamDofFocusDistanceBias(camera: CameraIndex, distanceBias: number): void {
	const setCamDofFocusDistanceBias_result = Citizen.invokeNative<void>('0xB44FCE2D38FDEDFE', camera, distanceBias);
	return setCamDofFocusDistanceBias_result;
}