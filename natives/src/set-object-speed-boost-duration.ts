import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_SPEED_BOOST_DURATION
 *
 * 0x824F169326B2BC67

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} boostDuration
 */
export function setObjectSpeedBoostDuration(object: ObjectIndex, boostDuration: number): void {
	const setObjectSpeedBoostDuration_result = Citizen.invokeNative<void>('0x824F169326B2BC67', object, boostDuration);
	return setObjectSpeedBoostDuration_result;
}