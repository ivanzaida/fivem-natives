import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:HAS_VEHICLE_BEEN_OWNED_BY_PLAYER
 *
 * 0XE4E83A5B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function hasVehicleBeenOwnedByPlayer(vehicle: VehicleIndex): boolean {
	const hasVehicleBeenOwnedByPlayer_result = Citizen.invokeNative<boolean>('0XE4E83A5B', vehicle);
	return hasVehicleBeenOwnedByPlayer_result;
}