import { Vector3, EEulerRotOrder } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MOBILE:GET_MOBILE_PHONE_ROTATION
 *
 * 0x3CA646A848A5F334

 * 
 * ------------------------------------------------------------------
 * @param {Vector3} outRotationVector [Ref]
 * @param {EEulerRotOrder} rotOrder
 */
export function getMobilePhoneRotation(outRotationVector: Vector3 /* ptr */, rotOrder: EEulerRotOrder | number = 0): void {
	const outRotationVectorPtr = new Vector3Ref();
	const getMobilePhoneRotation_result = Citizen.invokeNative<void>('0x3CA646A848A5F334', outRotationVectorPtr.dataView, rotOrder);
	outRotationVectorPtr.copyToVector(outRotationVector);
	return getMobilePhoneRotation_result;
}