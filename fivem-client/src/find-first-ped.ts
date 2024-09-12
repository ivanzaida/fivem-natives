import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_FIRST_PED
 *
 * 0xFB012961

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} outEntity [Ref]
 * @returns {number}  
 */
export function findFirstPed(outEntity: IntRef /* ptr */): number {
	const findFirstPed_result = Citizen.invokeNative<number>('0xFB012961', outEntity.dataView);
	return findFirstPed_result;
}