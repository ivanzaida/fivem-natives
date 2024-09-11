import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_NEAR_DOF
 *
 * 0x1991568378B6C0D0

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} nearDof
 */
export function setCamNearDof(camera: CameraIndex, nearDof: number): void {
	const setCamNearDof_result = Citizen.invokeNative<void>('0x1991568378B6C0D0', camera, nearDof);
	return setCamNearDof_result;
}