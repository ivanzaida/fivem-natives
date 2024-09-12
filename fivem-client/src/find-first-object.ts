import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_FIRST_OBJECT
 *
 * 0xFAA6CB5D

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} outEntity [Ref]
 * @returns {number}  
 */
export function findFirstObject(outEntity: IntRef /* ptr */): number {
	const findFirstObject_result = Citizen.invokeNative<number>('0xFAA6CB5D', outEntity.dataView);
	return findFirstObject_result;
}