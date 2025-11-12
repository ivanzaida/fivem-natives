import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_OVERRIDDEN_FOCUS_DISTANCE
 *
 * 0x530423D35DCB5139

 * 
 * Specifies a custom focus distance (in metres) that should be used by the adaptive depth of field effect, overriding of any other focus behaviour. Note that this override is blended relative to the measured depth via SET_CAM_DOF_OVERRIDDEN_FOCUS_DISTANCE_BLEND_LEVEL.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} distance
 */
export function setCamDofOverriddenFocusDistance(camera: CameraIndex, distance: number): void {
	const setCamDofOverriddenFocusDistance_result = Citizen.invokeNative<void>('0x530423D35DCB5139', camera, distance);
	return setCamDofOverriddenFocusDistance_result;
}