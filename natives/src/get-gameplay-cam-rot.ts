import { EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_GAMEPLAY_CAM_ROT
 *
 * 0xD84A545408A3099A

 * 
 * p0 dosen't seem to change much, I tried it with 0, 1, 2:
 * 0-Pitch(X): -70.000092
 * 0-Roll(Y): -0.000001
 * 0-Yaw(Z): -43.886459
 * 1-Pitch(X): -70.000092
 * 1-Roll(Y): -0.000001
 * 1-Yaw(Z): -43.886463
 * 2-Pitch(X): -70.000092
 * 2-Roll(Y): -0.000002
 * 2-Yaw(Z): -43.886467
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getGameplayCamRot(rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getGameplayCamRot_result = Citizen.invokeNative<Vector3>('0xD84A545408A3099A', rotOrder);
	return getGameplayCamRot_result;
}