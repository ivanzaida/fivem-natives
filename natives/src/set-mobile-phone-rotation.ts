import { EEulerRotOrder } from '@ivanzaida/structures'

/**
 * MOBILE:SET_MOBILE_PHONE_ROTATION
 *
 * 0xA0382000AA987093

 * 
 * Last parameter is unknown and always zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newRotationVectorX
 * @param {number} newRotationVectorY
 * @param {number} newRotationVectorZ
 * @param {EEulerRotOrder} rotOrder
 */
export function setMobilePhoneRotation(newRotationVectorX: number, newRotationVectorY: number, newRotationVectorZ: number, rotOrder: EEulerRotOrder | number = 0): void {
	const setMobilePhoneRotation_result = Citizen.invokeNative<void>('0xA0382000AA987093', newRotationVectorX, newRotationVectorY, newRotationVectorZ, rotOrder);
	return setMobilePhoneRotation_result;
}