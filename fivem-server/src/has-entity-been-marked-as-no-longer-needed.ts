import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:HAS_ENTITY_BEEN_MARKED_AS_NO_LONGER_NEEDED
 *
 * 0X9C9A3BE0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function hasEntityBeenMarkedAsNoLongerNeeded(vehicle: VehicleIndex): boolean {
	const hasEntityBeenMarkedAsNoLongerNeeded_result = Citizen.invokeNative<boolean>('0X9C9A3BE0', vehicle);
	return hasEntityBeenMarkedAsNoLongerNeeded_result;
}