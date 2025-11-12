import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_IS_A_PRESSURE_PLATE
 *
 * 0x806B9D97E4C16543

 * 
 * Sets whether an articulated object behaves as a pressure plate
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} isPressurePlate
 */
export function setObjectIsAPressurePlate(object: ObjectIndex, isPressurePlate: boolean): void {
	const setObjectIsAPressurePlate_result = Citizen.invokeNative<void>('0x806B9D97E4C16543', object, isPressurePlate);
	return setObjectIsAPressurePlate_result;
}