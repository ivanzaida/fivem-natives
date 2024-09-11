import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_NEXT_PICKUP
 *
 * 0X4107EF0F

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 * @param {IntRef} outEntity [Ref]
 * @returns {boolean}  
 */
export function findNextPickup(findHandle: number, outEntity: IntRef /* ptr */): boolean {
	const findNextPickup_result = Citizen.invokeNative<boolean>('0X4107EF0F', findHandle, outEntity.dataView);
	return findNextPickup_result;
}