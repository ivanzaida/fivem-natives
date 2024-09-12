import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_SPEED_BOOST_AMOUNT
 *
 * 0xB853745FD2637D7F

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} boostAmount
 */
export function setObjectSpeedBoostAmount(object: ObjectIndex, boostAmount: number): void {
	const setObjectSpeedBoostAmount_result = Citizen.invokeNative<void>('0xB853745FD2637D7F', object, boostAmount);
	return setObjectSpeedBoostAmount_result;
}