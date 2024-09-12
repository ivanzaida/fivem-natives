import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_BOAT_WRECKED
 *
 * 0x9049DB44

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {boolean}  Returns whether or not the boat is wrecked.
 */
export function isBoatWrecked(vehicle: VehicleIndex): boolean {
	const isBoatWrecked_result = Citizen.invokeNative<boolean>('0x9049DB44', vehicle);
	return isBoatWrecked_result;
}