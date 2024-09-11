import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_FAR_DOF
 *
 * 0x12DA57732DE5D8BB

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} farDof
 */
export function setCamFarDof(camera: CameraIndex, farDof: number): void {
	const setCamFarDof_result = Citizen.invokeNative<void>('0x12DA57732DE5D8BB', camera, farDof);
	return setCamFarDof_result;
}