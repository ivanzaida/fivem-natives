import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DOF_FNUMBER_OF_LENS
 *
 * 0xC316A4E0AF22543B

 * 
 * This native has its name defined inside its codE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} number
 */
export function setCamDofFnumberOfLens(camera: CameraIndex, number: number): void {
	const setCamDofFnumberOfLens_result = Citizen.invokeNative<void>('0xC316A4E0AF22543B', camera, number);
	return setCamDofFnumberOfLens_result;
}