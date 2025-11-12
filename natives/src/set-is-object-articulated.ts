import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_IS_OBJECT_ARTICULATED
 *
 * 0x140444BB8ABDB066

 * 
 * Sets whether an object is going to be used as an ariculated prop
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} isArticulated
 */
export function setIsObjectArticulated(object: ObjectIndex, isArticulated: boolean): void {
	const setIsObjectArticulated_result = Citizen.invokeNative<void>('0x140444BB8ABDB066', object, isArticulated);
	return setIsObjectArticulated_result;
}