import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_MAX_NEAR_IN_FOCUS_DISTANCE_BLEND_LEVEL
 *
 * 0xF94FC0634C750884

 * 
 * This native has a name defined inside its code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} blendLevel
 */
export function setCamDofMaxNearInFocusDistanceBlendLevel(camera: CameraIndex, blendLevel: number): void {
	const setCamDofMaxNearInFocusDistanceBlendLevel_result = Citizen.invokeNative<void>('0xF94FC0634C750884', camera, blendLevel);
	return setCamDofMaxNearInFocusDistanceBlendLevel_result;
}