import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_MAX_NEAR_IN_FOCUS_DISTANCE
 *
 * 0x365C28B73347797E

 * 
 * This native has a name defined inside its code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} distance
 */
export function setCamDofMaxNearInFocusDistance(camera: CameraIndex, distance: number): void {
	const setCamDofMaxNearInFocusDistance_result = Citizen.invokeNative<void>('0x365C28B73347797E', camera, distance);
	return setCamDofMaxNearInFocusDistance_result;
}