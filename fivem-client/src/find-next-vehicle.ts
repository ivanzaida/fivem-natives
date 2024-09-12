import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_NEXT_VEHICLE
 *
 * 0x8839120D

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 * @param {IntRef} outEntity [Ref]
 * @returns {boolean}  
 */
export function findNextVehicle(findHandle: number, outEntity: IntRef /* ptr */): boolean {
	const findNextVehicle_result = Citizen.invokeNative<boolean>('0x8839120D', findHandle, outEntity.dataView);
	return findNextVehicle_result;
}