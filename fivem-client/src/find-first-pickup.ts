import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_FIRST_PICKUP
 *
 * 0X3FF9D340

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} outEntity [Ref]
 * @returns {number}  
 */
export function findFirstPickup(outEntity: IntRef /* ptr */): number {
	const findFirstPickup_result = Citizen.invokeNative<number>('0X3FF9D340', outEntity.dataView);
	return findFirstPickup_result;
}