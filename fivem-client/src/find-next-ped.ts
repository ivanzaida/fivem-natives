import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_NEXT_PED
 *
 * 0xAB09B548

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 * @param {IntRef} outEntity [Ref]
 * @returns {boolean}  
 */
export function findNextPed(findHandle: number, outEntity: IntRef /* ptr */): boolean {
	const findNextPed_result = Citizen.invokeNative<boolean>('0xAB09B548', findHandle, outEntity.dataView);
	return findNextPed_result;
}