import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_OVERRIDDEN_FOCUS_DISTANCE_BLEND_LEVEL
 *
 * 0xA1A2D94E99309CF1

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} blendLevel
 */
export function setCamDofOverriddenFocusDistanceBlendLevel(camera: CameraIndex, blendLevel: number): void {
	const setCamDofOverriddenFocusDistanceBlendLevel_result = Citizen.invokeNative<void>('0xA1A2D94E99309CF1', camera, blendLevel);
	return setCamDofOverriddenFocusDistanceBlendLevel_result;
}