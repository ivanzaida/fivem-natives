import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CAN_ANCHOR_BOAT_HERE_IGNORE_PLAYERS
 *
 * 0x1E9361E60B23497B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function canAnchorBoatHereIgnorePlayers(vehicle: VehicleIndex): boolean {
	const canAnchorBoatHereIgnorePlayers_result = Citizen.invokeNative<boolean>('0x1E9361E60B23497B', vehicle);
	return canAnchorBoatHereIgnorePlayers_result;
}