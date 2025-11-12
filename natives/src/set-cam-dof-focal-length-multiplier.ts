import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_FOCAL_LENGTH_MULTIPLIER
 *
 * 0x880E454F39FC7F42

 * 
 * Specifies the focal length multiplier to be used by the physical lens model in the adaptive depth of field effect. This is equivalent to crop factor. Increasing this value will result in shallower depth of field and stonger blur.
 * 
 * Native name labeled within its code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} multiplier
 */
export function setCamDofFocalLengthMultiplier(camera: CameraIndex, multiplier: number): void {
	const setCamDofFocalLengthMultiplier_result = Citizen.invokeNative<void>('0x880E454F39FC7F42', camera, multiplier);
	return setCamDofFocalLengthMultiplier_result;
}