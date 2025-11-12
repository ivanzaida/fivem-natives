import { CameraIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_ROT
 *
 * 0x5E5CEC33463AD803

 * 
 * Sets the rotation of the cam.
 * Last parameter unknown.
 * 
 * Last parameter seems to always be set to 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} newRotX
 * @param {number} newRotY
 * @param {number} newRotZ
 * @param {EEulerRotOrder} rotOrder
 */
export function setCamRot(camera: CameraIndex, newRotX: number, newRotY: number, newRotZ: number, rotOrder: EEulerRotOrder | number = 2): void {
	const setCamRot_result = Citizen.invokeNative<void>('0x5E5CEC33463AD803', camera, newRotX, newRotY, newRotZ, rotOrder);
	return setCamRot_result;
}