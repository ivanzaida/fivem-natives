import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_STRENGTH
 *
 * 0x4396EEBF487EDFB1

 * 
 * Note that this command nulls the effect of any previous call to SET_CAM_DOF_PLANES, as the out-of-focus DOF planes will henceforth be derived based upon the DOF strength.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} strength
 */
export function setCamDofStrength(camera: CameraIndex, strength: number): void {
	const setCamDofStrength_result = Citizen.invokeNative<void>('0x4396EEBF487EDFB1', camera, strength);
	return setCamDofStrength_result;
}