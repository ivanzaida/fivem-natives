import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CLOSE_BOMB_BAY_DOORS
 *
 * 0x248319A8E9EA4DA3

 * 
 * Command to close a bomb bay, this isn't setup like a normal door.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function closeBombBayDoors(vehicle: VehicleIndex): void {
	const closeBombBayDoors_result = Citizen.invokeNative<void>('0x248319A8E9EA4DA3', vehicle);
	return closeBombBayDoors_result;
}