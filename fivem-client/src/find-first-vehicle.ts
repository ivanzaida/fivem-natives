import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_FIRST_VEHICLE
 *
 * 0X15E55694

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} outEntity [Ref]
 * @returns {number}  
 */
export function findFirstVehicle(outEntity: IntRef /* ptr */): number {
	const findFirstVehicle_result = Citizen.invokeNative<number>('0X15E55694', outEntity.dataView);
	return findFirstVehicle_result;
}