import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:OPEN_BOMB_BAY_DOORS
 *
 * 0xE2F63CAB8DDA4016

 * 
 * Command to open a bomb bay, this isn't setup like a normal door.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function openBombBayDoors(vehicle: VehicleIndex): void {
	const openBombBayDoors_result = Citizen.invokeNative<void>('0xE2F63CAB8DDA4016', vehicle);
	return openBombBayDoors_result;
}