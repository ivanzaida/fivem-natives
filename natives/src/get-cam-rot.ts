import { CameraIndex, EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_ROT
 *
 * 0x9DDBEF363FADFA4C

 * 
 * The last parameter, as in other "ROT" methods, is usually 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getCamRot(camera: CameraIndex, rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getCamRot_result = Citizen.invokeNative<Vector3>('0x9DDBEF363FADFA4C', camera, rotOrder);
	return getCamRot_result;
}