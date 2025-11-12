import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_PLANES
 *
 * 0x75C0D0B8F3E221F1

 * 
 * Note that this command nulls the effect of any previous call to SET_CAM_DOF_STRENGTH, as the four DOF planes are overwritten and the relationship between the out-of-focus planes and the DOF strength is broken.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} nearOutOfFocusPlane
 * @param {number} nearInFocusPlane
 * @param {number} farInFocusPlane
 * @param {number} farOutOfFocusPlane
 */
export function setCamDofPlanes(camera: CameraIndex, nearOutOfFocusPlane: number, nearInFocusPlane: number, farInFocusPlane: number, farOutOfFocusPlane: number): void {
	const setCamDofPlanes_result = Citizen.invokeNative<void>('0x75C0D0B8F3E221F1', camera, nearOutOfFocusPlane, nearInFocusPlane, farInFocusPlane, farOutOfFocusPlane);
	return setCamDofPlanes_result;
}