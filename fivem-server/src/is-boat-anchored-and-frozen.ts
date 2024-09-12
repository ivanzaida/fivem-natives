import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_BOAT_ANCHORED_AND_FROZEN
 *
 * 0xD5C39EE6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {boolean}  Returns whether or not the boat is anchored and frozen.
 */
export function isBoatAnchoredAndFrozen(vehicle: VehicleIndex): boolean {
	const isBoatAnchoredAndFrozen_result = Citizen.invokeNative<boolean>('0xD5C39EE6', vehicle);
	return isBoatAnchoredAndFrozen_result;
}