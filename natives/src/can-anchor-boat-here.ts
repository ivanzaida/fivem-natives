import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CAN_ANCHOR_BOAT_HERE
 *
 * 0x138421810ACE4B5D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function canAnchorBoatHere(vehicle: VehicleIndex): boolean {
	const canAnchorBoatHere_result = Citizen.invokeNative<boolean>('0x138421810ACE4B5D', vehicle);
	return canAnchorBoatHere_result;
}