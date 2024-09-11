import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_OBJECT_TINT_INDEX
 *
 * 0xC557ED333E7A31E1

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @returns {number}  
 */
export function getObjectTintIndex(object: ObjectIndex): number {
	const getObjectTintIndex_result = Citizen.invokeNative<number>('0xC557ED333E7A31E1', object);
	return getObjectTintIndex_result;
}